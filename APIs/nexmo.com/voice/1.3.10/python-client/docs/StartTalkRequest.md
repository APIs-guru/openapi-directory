# StartTalkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | [**Language**](Language.md) |  | [optional] [default to Language.EN_MINUS_US]
**level** | **str** | The volume level that the speech is played. This can be any value between &#x60;-1&#x60; to &#x60;1&#x60; in &#x60;0.1&#x60; increments, with &#x60;0&#x60; being the default. | [optional] [default to '0']
**loop** | **int** | The number of times to repeat the text the file, 0 for infinite | [optional] [default to 1]
**premium** | **bool** | Set to true to use the premium version of the specified style if available, otherwise the standard version will be used. The default value is false. You can find more information about Premium Voices in the [Text-To-Speech guide](/voice/voice-api/guides/text-to-speech#premium-voices). | [optional] [default to False]
**style** | **int** | The vocal style (vocal range, tessitura, and timbre) to use | [optional] [default to 0]
**text** | **str** | The text to read | 
**voice_name** | [**VoiceName**](VoiceName.md) |  | [optional] [default to VoiceName.KIMBERLY]

## Example

```python
from openapi_client.models.start_talk_request import StartTalkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartTalkRequest from a JSON string
start_talk_request_instance = StartTalkRequest.from_json(json)
# print the JSON string representation of the object
print(StartTalkRequest.to_json())

# convert the object into a dict
start_talk_request_dict = start_talk_request_instance.to_dict()
# create an instance of StartTalkRequest from a dict
start_talk_request_from_dict = StartTalkRequest.from_dict(start_talk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


