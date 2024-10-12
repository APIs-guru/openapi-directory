# GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig

Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_improved_email_privacy** | **bool** | Migrates the project to a state of improved email privacy. For example certain error codes are more generic to avoid giving away information on whether the account exists. In addition, this disables certain features that as a side-effect allow user enumeration. Enabling this toggle disables the fetchSignInMethodsForEmail functionality and changing the user&#39;s email to an unverified email. It is recommended to remove dependence on this functionality and enable this toggle to improve user privacy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_email_privacy_config import GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_email_privacy_config_instance = GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_email_privacy_config_dict = google_cloud_identitytoolkit_admin_v2_email_privacy_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig from a dict
google_cloud_identitytoolkit_admin_v2_email_privacy_config_from_dict = GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig.from_dict(google_cloud_identitytoolkit_admin_v2_email_privacy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


