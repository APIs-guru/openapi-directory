# DataExportSetting

Represents a data export setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataExportSettingProperties**](DataExportSettingProperties.md) |  | [optional] 
**kind** | **str** | the kind of the settings string (DataExportSetting) | 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_export_setting import DataExportSetting

# TODO update the JSON string below
json = "{}"
# create an instance of DataExportSetting from a JSON string
data_export_setting_instance = DataExportSetting.from_json(json)
# print the JSON string representation of the object
print(DataExportSetting.to_json())

# convert the object into a dict
data_export_setting_dict = data_export_setting_instance.to_dict()
# create an instance of DataExportSetting from a dict
data_export_setting_from_dict = DataExportSetting.from_dict(data_export_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


