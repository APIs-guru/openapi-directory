# SecuritySettingsPatchProperties

The properties of the security settings patch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chap_settings** | [**ChapSettings**](ChapSettings.md) |  | [optional] 
**cloud_appliance_settings** | [**CloudApplianceSettings**](CloudApplianceSettings.md) |  | [optional] 
**device_admin_password** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 
**remote_management_settings** | [**RemoteManagementSettingsPatch**](RemoteManagementSettingsPatch.md) |  | [optional] 
**snapshot_password** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 

## Example

```python
from openapi_client.models.security_settings_patch_properties import SecuritySettingsPatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySettingsPatchProperties from a JSON string
security_settings_patch_properties_instance = SecuritySettingsPatchProperties.from_json(json)
# print the JSON string representation of the object
print(SecuritySettingsPatchProperties.to_json())

# convert the object into a dict
security_settings_patch_properties_dict = security_settings_patch_properties_instance.to_dict()
# create an instance of SecuritySettingsPatchProperties from a dict
security_settings_patch_properties_from_dict = SecuritySettingsPatchProperties.from_dict(security_settings_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


