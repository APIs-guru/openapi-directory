# GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest

Request message for updating the group priority ordering of an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_ids** | **List[str]** | Required. The group IDs, in desired priority ordering. | [optional] 
**policy_namespace** | **str** | The namespace of the policy type for the request. | [optional] 
**policy_schema** | **str** | The schema name of the policy for the request. | [optional] 
**policy_target_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_update_group_priority_ordering_request import GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest from a JSON string
google_chrome_policy_versions_v1_update_group_priority_ordering_request_instance = GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_update_group_priority_ordering_request_dict = google_chrome_policy_versions_v1_update_group_priority_ordering_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest from a dict
google_chrome_policy_versions_v1_update_group_priority_ordering_request_from_dict = GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest.from_dict(google_chrome_policy_versions_v1_update_group_priority_ordering_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


