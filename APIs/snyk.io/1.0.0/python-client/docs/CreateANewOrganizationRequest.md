# CreateANewOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | The group ID. The &#x60;API_KEY&#x60; must have access to this group. | [optional] 
**name** | **str** | The name of the new organization | 
**source_org_id** | **str** | The id of an organization to copy settings from.  If provided, this organization must be associated with the same group.  The items that will be copied are:  Source control integrations (GitHub, GitLab, BitBucket) \\+ Container registries integrations (ACR, Docker Hub, ECR, GCR) \\+ Container orchestrators integrations (Kubernetes) \\+ PaaS and Serverless Integrations (Heroku, AWS Lambda) \\+ Notification integrations (Slack, Jira) \\+ Policies \\+ Ignore settings \\+ Language settings \\+ Infrastructure as Code settings \\+ Snyk Code settings  The following will not be copied across: Service accounts \\+ Members \\+ Projects \\+ Notification preferences | [optional] 

## Example

```python
from openapi_client.models.create_a_new_organization_request import CreateANewOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateANewOrganizationRequest from a JSON string
create_a_new_organization_request_instance = CreateANewOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateANewOrganizationRequest.to_json())

# convert the object into a dict
create_a_new_organization_request_dict = create_a_new_organization_request_instance.to_dict()
# create an instance of CreateANewOrganizationRequest from a dict
create_a_new_organization_request_from_dict = CreateANewOrganizationRequest.from_dict(create_a_new_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


