# VoiceSelectionParams

Description of which voice to use for a synthesis request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_voice** | [**CustomVoiceParams**](CustomVoiceParams.md) |  | [optional] 
**language_code** | **str** | Required. The language (and potentially also the region) of the voice expressed as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g. \&quot;en-US\&quot;. This should not include a script tag (e.g. use \&quot;cmn-cn\&quot; rather than \&quot;cmn-Hant-cn\&quot;), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn&#39;t a Canadian voice available), or even a different language, e.g. using \&quot;nb\&quot; (Norwegian Bokmal) instead of \&quot;no\&quot; (Norwegian)\&quot;. | [optional] 
**name** | **str** | The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender. | [optional] 
**ssml_gender** | **str** | The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request. | [optional] 

## Example

```python
from openapi_client.models.voice_selection_params import VoiceSelectionParams

# TODO update the JSON string below
json = "{}"
# create an instance of VoiceSelectionParams from a JSON string
voice_selection_params_instance = VoiceSelectionParams.from_json(json)
# print the JSON string representation of the object
print(VoiceSelectionParams.to_json())

# convert the object into a dict
voice_selection_params_dict = voice_selection_params_instance.to_dict()
# create an instance of VoiceSelectionParams from a dict
voice_selection_params_from_dict = VoiceSelectionParams.from_dict(voice_selection_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


