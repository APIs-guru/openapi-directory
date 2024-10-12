# GoogleCloudIdentitytoolkitAdminV2ClientConfig

Options related to how clients making requests on behalf of a project should be configured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | Output only. API key that can be used when making requests for this project. | [optional] [readonly] 
**firebase_subdomain** | **str** | Output only. Firebase subdomain. | [optional] [readonly] 
**permissions** | [**GoogleCloudIdentitytoolkitAdminV2Permissions**](GoogleCloudIdentitytoolkitAdminV2Permissions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_client_config import GoogleCloudIdentitytoolkitAdminV2ClientConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2ClientConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_client_config_instance = GoogleCloudIdentitytoolkitAdminV2ClientConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2ClientConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_client_config_dict = google_cloud_identitytoolkit_admin_v2_client_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2ClientConfig from a dict
google_cloud_identitytoolkit_admin_v2_client_config_from_dict = GoogleCloudIdentitytoolkitAdminV2ClientConfig.from_dict(google_cloud_identitytoolkit_admin_v2_client_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


