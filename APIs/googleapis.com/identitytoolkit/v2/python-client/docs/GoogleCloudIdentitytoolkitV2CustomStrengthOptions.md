# GoogleCloudIdentitytoolkitV2CustomStrengthOptions

Custom strength options to enforce on user passwords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains_lowercase_character** | **bool** | The password must contain a lower case character. | [optional] 
**contains_non_alphanumeric_character** | **bool** | The password must contain a non alpha numeric character. | [optional] 
**contains_numeric_character** | **bool** | The password must contain a number. | [optional] 
**contains_uppercase_character** | **bool** | The password must contain an upper case character. | [optional] 
**max_password_length** | **int** | Maximum password length. No default max length | [optional] 
**min_password_length** | **int** | Minimum password length. Range from 6 to 30 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_custom_strength_options import GoogleCloudIdentitytoolkitV2CustomStrengthOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2CustomStrengthOptions from a JSON string
google_cloud_identitytoolkit_v2_custom_strength_options_instance = GoogleCloudIdentitytoolkitV2CustomStrengthOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2CustomStrengthOptions.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_custom_strength_options_dict = google_cloud_identitytoolkit_v2_custom_strength_options_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2CustomStrengthOptions from a dict
google_cloud_identitytoolkit_v2_custom_strength_options_from_dict = GoogleCloudIdentitytoolkitV2CustomStrengthOptions.from_dict(google_cloud_identitytoolkit_v2_custom_strength_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


