# GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse

Response message for listing the group priority ordering of an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_ids** | **List[str]** | Output only. The group IDs, in priority ordering. | [optional] [readonly] 
**policy_namespace** | **str** | Output only. The namespace of the policy type of the group IDs. | [optional] [readonly] 
**policy_schema** | **str** | Output only. The schema name of the policy for the group IDs. | [optional] [readonly] 
**policy_target_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_list_group_priority_ordering_response import GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse from a JSON string
google_chrome_policy_versions_v1_list_group_priority_ordering_response_instance = GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_list_group_priority_ordering_response_dict = google_chrome_policy_versions_v1_list_group_priority_ordering_response_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse from a dict
google_chrome_policy_versions_v1_list_group_priority_ordering_response_from_dict = GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse.from_dict(google_chrome_policy_versions_v1_list_group_priority_ordering_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


