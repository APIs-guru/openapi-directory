# GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig

Additional config for SignInWithApple.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_ids** | **List[str]** | A list of Bundle ID&#39;s usable by this project | [optional] 
**code_flow_config** | [**GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig**](GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_apple_sign_in_config import GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_apple_sign_in_config_instance = GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_apple_sign_in_config_dict = google_cloud_identitytoolkit_admin_v2_apple_sign_in_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig from a dict
google_cloud_identitytoolkit_admin_v2_apple_sign_in_config_from_dict = GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig.from_dict(google_cloud_identitytoolkit_admin_v2_apple_sign_in_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


