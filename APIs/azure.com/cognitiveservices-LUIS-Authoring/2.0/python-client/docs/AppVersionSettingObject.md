# AppVersionSettingObject

Object model of an application version setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The application version setting name. | [optional] 
**value** | **str** | The application version setting value. | [optional] 

## Example

```python
from openapi_client.models.app_version_setting_object import AppVersionSettingObject

# TODO update the JSON string below
json = "{}"
# create an instance of AppVersionSettingObject from a JSON string
app_version_setting_object_instance = AppVersionSettingObject.from_json(json)
# print the JSON string representation of the object
print(AppVersionSettingObject.to_json())

# convert the object into a dict
app_version_setting_object_dict = app_version_setting_object_instance.to_dict()
# create an instance of AppVersionSettingObject from a dict
app_version_setting_object_from_dict = AppVersionSettingObject.from_dict(app_version_setting_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


