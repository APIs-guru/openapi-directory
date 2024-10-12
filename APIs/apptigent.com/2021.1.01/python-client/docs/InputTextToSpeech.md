# InputTextToSpeech


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | Text to convert (10,000 characters max) | 
**type** | **str** | Text or file type | [default to 'PlainText']
**voice** | **str** | Voice locale (must match language of input text) | [default to 'en-US, Aria (Female)']

## Example

```python
from openapi_client.models.input_text_to_speech import InputTextToSpeech

# TODO update the JSON string below
json = "{}"
# create an instance of InputTextToSpeech from a JSON string
input_text_to_speech_instance = InputTextToSpeech.from_json(json)
# print the JSON string representation of the object
print(InputTextToSpeech.to_json())

# convert the object into a dict
input_text_to_speech_dict = input_text_to_speech_instance.to_dict()
# create an instance of InputTextToSpeech from a dict
input_text_to_speech_from_dict = InputTextToSpeech.from_dict(input_text_to_speech_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


