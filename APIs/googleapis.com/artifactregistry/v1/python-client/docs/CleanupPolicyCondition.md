# CleanupPolicyCondition

CleanupPolicyCondition is a set of conditions attached to a CleanupPolicy. If multiple entries are set, all must be satisfied for the condition to be satisfied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**newer_than** | **str** | Match versions newer than a duration. | [optional] 
**older_than** | **str** | Match versions older than a duration. | [optional] 
**package_name_prefixes** | **List[str]** | Match versions by package prefix. Applied on any prefix match. | [optional] 
**tag_prefixes** | **List[str]** | Match versions by tag prefix. Applied on any prefix match. | [optional] 
**tag_state** | **str** | Match versions by tag status. | [optional] 
**version_name_prefixes** | **List[str]** | Match versions by version name prefix. Applied on any prefix match. | [optional] 

## Example

```python
from openapi_client.models.cleanup_policy_condition import CleanupPolicyCondition

# TODO update the JSON string below
json = "{}"
# create an instance of CleanupPolicyCondition from a JSON string
cleanup_policy_condition_instance = CleanupPolicyCondition.from_json(json)
# print the JSON string representation of the object
print(CleanupPolicyCondition.to_json())

# convert the object into a dict
cleanup_policy_condition_dict = cleanup_policy_condition_instance.to_dict()
# create an instance of CleanupPolicyCondition from a dict
cleanup_policy_condition_from_dict = CleanupPolicyCondition.from_dict(cleanup_policy_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


