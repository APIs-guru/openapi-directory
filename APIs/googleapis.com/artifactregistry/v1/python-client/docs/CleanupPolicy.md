# CleanupPolicy

Artifact policy configuration for repository cleanup policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Policy action. | [optional] 
**condition** | [**CleanupPolicyCondition**](CleanupPolicyCondition.md) |  | [optional] 
**id** | **str** | The user-provided ID of the cleanup policy. | [optional] 
**most_recent_versions** | [**CleanupPolicyMostRecentVersions**](CleanupPolicyMostRecentVersions.md) |  | [optional] 

## Example

```python
from openapi_client.models.cleanup_policy import CleanupPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of CleanupPolicy from a JSON string
cleanup_policy_instance = CleanupPolicy.from_json(json)
# print the JSON string representation of the object
print(CleanupPolicy.to_json())

# convert the object into a dict
cleanup_policy_dict = cleanup_policy_instance.to_dict()
# create an instance of CleanupPolicy from a dict
cleanup_policy_from_dict = CleanupPolicy.from_dict(cleanup_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


