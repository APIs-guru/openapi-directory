# GoogleChromePolicyVersionsV1PolicyModificationFieldError

Error information for a modification request of a specific field on a specific policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Output only. The error message related to the field. | [optional] [readonly] 
**var_field** | **str** | Output only. The name of the field with the error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_modification_field_error import GoogleChromePolicyVersionsV1PolicyModificationFieldError

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicyModificationFieldError from a JSON string
google_chrome_policy_versions_v1_policy_modification_field_error_instance = GoogleChromePolicyVersionsV1PolicyModificationFieldError.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicyModificationFieldError.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_modification_field_error_dict = google_chrome_policy_versions_v1_policy_modification_field_error_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicyModificationFieldError from a dict
google_chrome_policy_versions_v1_policy_modification_field_error_from_dict = GoogleChromePolicyVersionsV1PolicyModificationFieldError.from_dict(google_chrome_policy_versions_v1_policy_modification_field_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


