# DataExportSettingProperties

The data export setting properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Is the data export setting is enabled | 

## Example

```python
from openapi_client.models.data_export_setting_properties import DataExportSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataExportSettingProperties from a JSON string
data_export_setting_properties_instance = DataExportSettingProperties.from_json(json)
# print the JSON string representation of the object
print(DataExportSettingProperties.to_json())

# convert the object into a dict
data_export_setting_properties_dict = data_export_setting_properties_instance.to_dict()
# create an instance of DataExportSettingProperties from a dict
data_export_setting_properties_from_dict = DataExportSettingProperties.from_dict(data_export_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


