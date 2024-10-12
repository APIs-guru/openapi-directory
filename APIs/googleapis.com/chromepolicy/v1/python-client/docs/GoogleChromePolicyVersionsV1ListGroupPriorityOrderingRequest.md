# GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest

Request message for listing the group priority ordering of an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_namespace** | **str** | The namespace of the policy type for the request. | [optional] 
**policy_schema** | **str** | The schema name of the policy for the request. | [optional] 
**policy_target_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_list_group_priority_ordering_request import GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest from a JSON string
google_chrome_policy_versions_v1_list_group_priority_ordering_request_instance = GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_list_group_priority_ordering_request_dict = google_chrome_policy_versions_v1_list_group_priority_ordering_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest from a dict
google_chrome_policy_versions_v1_list_group_priority_ordering_request_from_dict = GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest.from_dict(google_chrome_policy_versions_v1_list_group_priority_ordering_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


