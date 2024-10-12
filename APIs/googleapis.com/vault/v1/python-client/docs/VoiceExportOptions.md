# VoiceExportOptions

The options for Voice exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_format** | **str** | The file format for exported text messages. | [optional] 

## Example

```python
from openapi_client.models.voice_export_options import VoiceExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of VoiceExportOptions from a JSON string
voice_export_options_instance = VoiceExportOptions.from_json(json)
# print the JSON string representation of the object
print(VoiceExportOptions.to_json())

# convert the object into a dict
voice_export_options_dict = voice_export_options_instance.to_dict()
# create an instance of VoiceExportOptions from a dict
voice_export_options_from_dict = VoiceExportOptions.from_dict(voice_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


