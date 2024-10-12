# GoogleChromePolicyVersionsV1PolicyModificationError

Error information for a modification request of a specific policy on a specific target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** | Output only. The non-field errors related to the modification. | [optional] [readonly] 
**field_errors** | [**List[GoogleChromePolicyVersionsV1PolicyModificationFieldError]**](GoogleChromePolicyVersionsV1PolicyModificationFieldError.md) | Output only. The error messages related to the modification. | [optional] [readonly] 
**policy_schema** | **str** | Output only. The specific policy schema modification that had an error. | [optional] [readonly] 
**policy_target_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_modification_error import GoogleChromePolicyVersionsV1PolicyModificationError

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicyModificationError from a JSON string
google_chrome_policy_versions_v1_policy_modification_error_instance = GoogleChromePolicyVersionsV1PolicyModificationError.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicyModificationError.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_modification_error_dict = google_chrome_policy_versions_v1_policy_modification_error_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicyModificationError from a dict
google_chrome_policy_versions_v1_policy_modification_error_from_dict = GoogleChromePolicyVersionsV1PolicyModificationError.from_dict(google_chrome_policy_versions_v1_policy_modification_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


