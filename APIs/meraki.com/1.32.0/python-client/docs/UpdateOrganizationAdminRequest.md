# UpdateOrganizationAdminRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the dashboard administrator | [optional] 
**networks** | [**List[CreateOrganizationAdminRequestNetworksInner]**](CreateOrganizationAdminRequestNetworksInner.md) | The list of networks that the dashboard administrator has privileges on | [optional] 
**org_access** | **str** | The privilege of the dashboard administrator on the organization. Can be one of &#39;full&#39;, &#39;read-only&#39;, &#39;enterprise&#39; or &#39;none&#39; | [optional] 
**tags** | [**List[CreateOrganizationAdminRequestTagsInner]**](CreateOrganizationAdminRequestTagsInner.md) | The list of tags that the dashboard administrator has privileges on | [optional] 

## Example

```python
from openapi_client.models.update_organization_admin_request import UpdateOrganizationAdminRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationAdminRequest from a JSON string
update_organization_admin_request_instance = UpdateOrganizationAdminRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationAdminRequest.to_json())

# convert the object into a dict
update_organization_admin_request_dict = update_organization_admin_request_instance.to_dict()
# create an instance of UpdateOrganizationAdminRequest from a dict
update_organization_admin_request_from_dict = UpdateOrganizationAdminRequest.from_dict(update_organization_admin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


