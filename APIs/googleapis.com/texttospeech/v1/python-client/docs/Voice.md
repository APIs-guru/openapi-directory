# Voice

Description of a voice supported by the TTS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_codes** | **List[str]** | The languages that this voice supports, expressed as [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g. \&quot;en-US\&quot;, \&quot;es-419\&quot;, \&quot;cmn-tw\&quot;). | [optional] 
**name** | **str** | The name of this voice. Each distinct voice has a unique name. | [optional] 
**natural_sample_rate_hertz** | **int** | The natural sample rate (in hertz) for this voice. | [optional] 
**ssml_gender** | **str** | The gender of this voice. | [optional] 

## Example

```python
from openapi_client.models.voice import Voice

# TODO update the JSON string below
json = "{}"
# create an instance of Voice from a JSON string
voice_instance = Voice.from_json(json)
# print the JSON string representation of the object
print(Voice.to_json())

# convert the object into a dict
voice_dict = voice_instance.to_dict()
# create an instance of Voice from a dict
voice_from_dict = Voice.from_dict(voice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


