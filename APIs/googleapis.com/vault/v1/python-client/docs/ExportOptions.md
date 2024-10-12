# ExportOptions

Additional options for exports

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendar_options** | [**CalendarExportOptions**](CalendarExportOptions.md) |  | [optional] 
**drive_options** | [**DriveExportOptions**](DriveExportOptions.md) |  | [optional] 
**groups_options** | [**GroupsExportOptions**](GroupsExportOptions.md) |  | [optional] 
**hangouts_chat_options** | [**HangoutsChatExportOptions**](HangoutsChatExportOptions.md) |  | [optional] 
**mail_options** | [**MailExportOptions**](MailExportOptions.md) |  | [optional] 
**region** | **str** | The requested data region for the export. | [optional] 
**voice_options** | [**VoiceExportOptions**](VoiceExportOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_options import ExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ExportOptions from a JSON string
export_options_instance = ExportOptions.from_json(json)
# print the JSON string representation of the object
print(ExportOptions.to_json())

# convert the object into a dict
export_options_dict = export_options_instance.to_dict()
# create an instance of ExportOptions from a dict
export_options_from_dict = ExportOptions.from_dict(export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


