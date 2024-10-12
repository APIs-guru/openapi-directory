# CalendarExportOptions

The options for Calendar exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_format** | **str** | The file format for exported text messages. | [optional] 

## Example

```python
from openapi_client.models.calendar_export_options import CalendarExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarExportOptions from a JSON string
calendar_export_options_instance = CalendarExportOptions.from_json(json)
# print the JSON string representation of the object
print(CalendarExportOptions.to_json())

# convert the object into a dict
calendar_export_options_dict = calendar_export_options_instance.to_dict()
# create an instance of CalendarExportOptions from a dict
calendar_export_options_from_dict = CalendarExportOptions.from_dict(calendar_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


