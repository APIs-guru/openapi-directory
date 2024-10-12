# HangoutsChatExportOptions

Options for Chat exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_format** | **str** | The file format for exported messages. | [optional] 

## Example

```python
from openapi_client.models.hangouts_chat_export_options import HangoutsChatExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of HangoutsChatExportOptions from a JSON string
hangouts_chat_export_options_instance = HangoutsChatExportOptions.from_json(json)
# print the JSON string representation of the object
print(HangoutsChatExportOptions.to_json())

# convert the object into a dict
hangouts_chat_export_options_dict = hangouts_chat_export_options_instance.to_dict()
# create an instance of HangoutsChatExportOptions from a dict
hangouts_chat_export_options_from_dict = HangoutsChatExportOptions.from_dict(hangouts_chat_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


