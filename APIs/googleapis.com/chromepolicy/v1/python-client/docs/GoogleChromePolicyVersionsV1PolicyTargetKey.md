# GoogleChromePolicyVersionsV1PolicyTargetKey

The key used to identify the target on which the policy will be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_target_keys** | **Dict[str, str]** | Map containing the additional target key name and value pairs used to further identify the target of the policy. | [optional] 
**target_resource** | **str** | The target resource on which this policy is applied. The following resources are supported: * Organizational Unit (\&quot;orgunits/{orgunit_id}\&quot;) * Group (\&quot;groups/{group_id}\&quot;) | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_target_key import GoogleChromePolicyVersionsV1PolicyTargetKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicyTargetKey from a JSON string
google_chrome_policy_versions_v1_policy_target_key_instance = GoogleChromePolicyVersionsV1PolicyTargetKey.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicyTargetKey.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_target_key_dict = google_chrome_policy_versions_v1_policy_target_key_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicyTargetKey from a dict
google_chrome_policy_versions_v1_policy_target_key_from_dict = GoogleChromePolicyVersionsV1PolicyTargetKey.from_dict(google_chrome_policy_versions_v1_policy_target_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


