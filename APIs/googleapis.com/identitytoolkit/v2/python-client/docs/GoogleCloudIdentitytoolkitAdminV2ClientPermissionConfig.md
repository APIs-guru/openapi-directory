# GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig

Options related to how clients making requests on behalf of a tenant should be configured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | [**GoogleCloudIdentitytoolkitAdminV2ClientPermissions**](GoogleCloudIdentitytoolkitAdminV2ClientPermissions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_client_permission_config import GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_client_permission_config_instance = GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_client_permission_config_dict = google_cloud_identitytoolkit_admin_v2_client_permission_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig from a dict
google_cloud_identitytoolkit_admin_v2_client_permission_config_from_dict = GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig.from_dict(google_cloud_identitytoolkit_admin_v2_client_permission_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


