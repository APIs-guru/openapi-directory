# InputMediaAudio

Represents an audio file to be treated as music to be sent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | *Optional*. Caption of the audio to be sent, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**duration** | **int** | *Optional*. Duration of the audio in seconds | [optional] 
**media** | **str** | File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\\_attach\\_name&gt;” to upload a new one using multipart/form-data under &lt;file\\_attach\\_name&gt; name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) | 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**performer** | **str** | *Optional*. Performer of the audio | [optional] 
**thumb** | **str** |  | [optional] 
**title** | **str** | *Optional*. Title of the audio | [optional] 
**type** | **str** | Type of the result, must be *audio* | 

## Example

```python
from openapi_client.models.input_media_audio import InputMediaAudio

# TODO update the JSON string below
json = "{}"
# create an instance of InputMediaAudio from a JSON string
input_media_audio_instance = InputMediaAudio.from_json(json)
# print the JSON string representation of the object
print(InputMediaAudio.to_json())

# convert the object into a dict
input_media_audio_dict = input_media_audio_instance.to_dict()
# create an instance of InputMediaAudio from a dict
input_media_audio_from_dict = InputMediaAudio.from_dict(input_media_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


