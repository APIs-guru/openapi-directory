# GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse

ListOrgPolicyViolationsResponse is the response message for OrgPolicyViolationsPreviewService.ListOrgPolicyViolations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. | [optional] 
**org_policy_violations** | [**List[GoogleCloudPolicysimulatorV1OrgPolicyViolation]**](GoogleCloudPolicysimulatorV1OrgPolicyViolation.md) | The list of OrgPolicyViolations | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1_list_org_policy_violations_response import GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse from a JSON string
google_cloud_policysimulator_v1_list_org_policy_violations_response_instance = GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1_list_org_policy_violations_response_dict = google_cloud_policysimulator_v1_list_org_policy_violations_response_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse from a dict
google_cloud_policysimulator_v1_list_org_policy_violations_response_from_dict = GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse.from_dict(google_cloud_policysimulator_v1_list_org_policy_violations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


