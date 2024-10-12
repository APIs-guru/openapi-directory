# VoiceOptions

Additional options for Voice search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**covered_data** | **List[str]** | Datatypes to search | [optional] 

## Example

```python
from openapi_client.models.voice_options import VoiceOptions

# TODO update the JSON string below
json = "{}"
# create an instance of VoiceOptions from a JSON string
voice_options_instance = VoiceOptions.from_json(json)
# print the JSON string representation of the object
print(VoiceOptions.to_json())

# convert the object into a dict
voice_options_dict = voice_options_instance.to_dict()
# create an instance of VoiceOptions from a dict
voice_options_from_dict = VoiceOptions.from_dict(voice_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


