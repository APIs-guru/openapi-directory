# SettingResource

The kind of the security setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | the kind of the settings string (DataExportSetting) | 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.setting_resource import SettingResource

# TODO update the JSON string below
json = "{}"
# create an instance of SettingResource from a JSON string
setting_resource_instance = SettingResource.from_json(json)
# print the JSON string representation of the object
print(SettingResource.to_json())

# convert the object into a dict
setting_resource_dict = setting_resource_instance.to_dict()
# create an instance of SettingResource from a dict
setting_resource_from_dict = SettingResource.from_dict(setting_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


