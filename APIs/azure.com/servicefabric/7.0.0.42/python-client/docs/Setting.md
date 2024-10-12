# Setting

Describes a setting for the container. The setting file path can be fetched from environment variable \"Fabric_SettingPath\". The path for Windows container is \"C:\\\\secrets\". The path for Linux container is \"/var/secrets\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the setting. | [optional] 
**type** | [**SettingType**](SettingType.md) |  | [optional] [default to SettingType.CLEARTEXT]
**value** | **str** | The value of the setting, will be processed based on the type provided. | [optional] 

## Example

```python
from openapi_client.models.setting import Setting

# TODO update the JSON string below
json = "{}"
# create an instance of Setting from a JSON string
setting_instance = Setting.from_json(json)
# print the JSON string representation of the object
print(Setting.to_json())

# convert the object into a dict
setting_dict = setting_instance.to_dict()
# create an instance of Setting from a dict
setting_from_dict = Setting.from_dict(setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


