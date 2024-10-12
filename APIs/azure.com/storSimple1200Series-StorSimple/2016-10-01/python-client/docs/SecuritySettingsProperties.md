# SecuritySettingsProperties

The properties of SecuritySettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_admin_password** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | 

## Example

```python
from openapi_client.models.security_settings_properties import SecuritySettingsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySettingsProperties from a JSON string
security_settings_properties_instance = SecuritySettingsProperties.from_json(json)
# print the JSON string representation of the object
print(SecuritySettingsProperties.to_json())

# convert the object into a dict
security_settings_properties_dict = security_settings_properties_instance.to_dict()
# create an instance of SecuritySettingsProperties from a dict
security_settings_properties_from_dict = SecuritySettingsProperties.from_dict(security_settings_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


