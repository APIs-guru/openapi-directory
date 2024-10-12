# EncryptionSettingsProperties

The properties of EncryptionSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_status** | **str** | The encryption status which indicates if encryption is enabled or not. | 
**key_rollover_status** | **str** | The key rollover status which indicates if key rollover is required or not. If secrets encryption has been upgraded, then it requires key rollover. | 

## Example

```python
from openapi_client.models.encryption_settings_properties import EncryptionSettingsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionSettingsProperties from a JSON string
encryption_settings_properties_instance = EncryptionSettingsProperties.from_json(json)
# print the JSON string representation of the object
print(EncryptionSettingsProperties.to_json())

# convert the object into a dict
encryption_settings_properties_dict = encryption_settings_properties_instance.to_dict()
# create an instance of EncryptionSettingsProperties from a dict
encryption_settings_properties_from_dict = EncryptionSettingsProperties.from_dict(encryption_settings_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


