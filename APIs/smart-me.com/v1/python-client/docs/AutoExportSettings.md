# AutoExportSettings

Settings for the auto export functionality of a meter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_format** | **str** | The export format | [optional] 
**export_interval** | **str** | The export interval of the auto export | [optional] 
**meter_point_id** | **str** | The meter point id set by the user | [optional] 
**upload_type** | **str** | The upload type | [optional] 

## Example

```python
from openapi_client.models.auto_export_settings import AutoExportSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AutoExportSettings from a JSON string
auto_export_settings_instance = AutoExportSettings.from_json(json)
# print the JSON string representation of the object
print(AutoExportSettings.to_json())

# convert the object into a dict
auto_export_settings_dict = auto_export_settings_instance.to_dict()
# create an instance of AutoExportSettings from a dict
auto_export_settings_from_dict = AutoExportSettings.from_dict(auto_export_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


