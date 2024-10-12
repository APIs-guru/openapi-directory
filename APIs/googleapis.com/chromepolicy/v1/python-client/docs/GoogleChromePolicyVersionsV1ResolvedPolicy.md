# GoogleChromePolicyVersionsV1ResolvedPolicy

The resolved value of a policy for a given target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_source_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 
**source_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 
**target_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 
**value** | [**GoogleChromePolicyVersionsV1PolicyValue**](GoogleChromePolicyVersionsV1PolicyValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_resolved_policy import GoogleChromePolicyVersionsV1ResolvedPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1ResolvedPolicy from a JSON string
google_chrome_policy_versions_v1_resolved_policy_instance = GoogleChromePolicyVersionsV1ResolvedPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1ResolvedPolicy.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_resolved_policy_dict = google_chrome_policy_versions_v1_resolved_policy_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1ResolvedPolicy from a dict
google_chrome_policy_versions_v1_resolved_policy_from_dict = GoogleChromePolicyVersionsV1ResolvedPolicy.from_dict(google_chrome_policy_versions_v1_resolved_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


