# PasswordManagementSettings

The password management settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connect_to** | **str** | Connection point of password management. | [optional] 
**connection_timeout** | **int** | Connection timeout for password extension. | [optional] 
**enabled** | **bool** | Indicates if the password extension is enabled. | [optional] 
**extension_file_path** | **str** | The file path of the password management extension. | [optional] 
**maximum_retry_count** | **int** | The maximum number of retries. | [optional] 
**requires_secure_connection** | **bool** | Indicates if a secure connection is required for password management. | [optional] 
**retry_interval_in_seconds** | **int** | The time between retries. | [optional] 
**supported_password_operations** | **str** | The supported password operations. | [optional] 
**unlock_account** | **bool** | Indicates if accounts should be unlocked when resetting password. | [optional] 
**user** | **str** | User to execute password extension. | [optional] 

## Example

```python
from openapi_client.models.password_management_settings import PasswordManagementSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordManagementSettings from a JSON string
password_management_settings_instance = PasswordManagementSettings.from_json(json)
# print the JSON string representation of the object
print(PasswordManagementSettings.to_json())

# convert the object into a dict
password_management_settings_dict = password_management_settings_instance.to_dict()
# create an instance of PasswordManagementSettings from a dict
password_management_settings_from_dict = PasswordManagementSettings.from_dict(password_management_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


