# EncryptionSettings

The encryption settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EncryptionSettingsProperties**](EncryptionSettingsProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.encryption_settings import EncryptionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionSettings from a JSON string
encryption_settings_instance = EncryptionSettings.from_json(json)
# print the JSON string representation of the object
print(EncryptionSettings.to_json())

# convert the object into a dict
encryption_settings_dict = encryption_settings_instance.to_dict()
# create an instance of EncryptionSettings from a dict
encryption_settings_from_dict = EncryptionSettings.from_dict(encryption_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


