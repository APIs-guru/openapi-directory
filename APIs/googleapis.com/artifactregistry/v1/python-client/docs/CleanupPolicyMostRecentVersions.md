# CleanupPolicyMostRecentVersions

CleanupPolicyMostRecentVersions is an alternate condition of a CleanupPolicy for retaining a minimum number of versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keep_count** | **int** | Minimum number of versions to keep. | [optional] 
**package_name_prefixes** | **List[str]** | List of package name prefixes that will apply this rule. | [optional] 

## Example

```python
from openapi_client.models.cleanup_policy_most_recent_versions import CleanupPolicyMostRecentVersions

# TODO update the JSON string below
json = "{}"
# create an instance of CleanupPolicyMostRecentVersions from a JSON string
cleanup_policy_most_recent_versions_instance = CleanupPolicyMostRecentVersions.from_json(json)
# print the JSON string representation of the object
print(CleanupPolicyMostRecentVersions.to_json())

# convert the object into a dict
cleanup_policy_most_recent_versions_dict = cleanup_policy_most_recent_versions_instance.to_dict()
# create an instance of CleanupPolicyMostRecentVersions from a dict
cleanup_policy_most_recent_versions_from_dict = CleanupPolicyMostRecentVersions.from_dict(cleanup_policy_most_recent_versions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


