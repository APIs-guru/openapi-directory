# GoogleCloudIdentitytoolkitAdminV2SignInConfig

Configuration related to local sign in methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_duplicate_emails** | **bool** | Whether to allow more than one account to have the same email. | [optional] 
**anonymous** | [**GoogleCloudIdentitytoolkitAdminV2Anonymous**](GoogleCloudIdentitytoolkitAdminV2Anonymous.md) |  | [optional] 
**email** | [**GoogleCloudIdentitytoolkitAdminV2Email**](GoogleCloudIdentitytoolkitAdminV2Email.md) |  | [optional] 
**hash_config** | [**GoogleCloudIdentitytoolkitAdminV2HashConfig**](GoogleCloudIdentitytoolkitAdminV2HashConfig.md) |  | [optional] 
**phone_number** | [**GoogleCloudIdentitytoolkitAdminV2PhoneNumber**](GoogleCloudIdentitytoolkitAdminV2PhoneNumber.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_sign_in_config import GoogleCloudIdentitytoolkitAdminV2SignInConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2SignInConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_sign_in_config_instance = GoogleCloudIdentitytoolkitAdminV2SignInConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2SignInConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_sign_in_config_dict = google_cloud_identitytoolkit_admin_v2_sign_in_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2SignInConfig from a dict
google_cloud_identitytoolkit_admin_v2_sign_in_config_from_dict = GoogleCloudIdentitytoolkitAdminV2SignInConfig.from_dict(google_cloud_identitytoolkit_admin_v2_sign_in_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


