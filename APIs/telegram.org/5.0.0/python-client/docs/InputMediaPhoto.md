# InputMediaPhoto

Represents a photo to be sent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | *Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**media** | **str** | File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\\_attach\\_name&gt;” to upload a new one using multipart/form-data under &lt;file\\_attach\\_name&gt; name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) | 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**type** | **str** | Type of the result, must be *photo* | 

## Example

```python
from openapi_client.models.input_media_photo import InputMediaPhoto

# TODO update the JSON string below
json = "{}"
# create an instance of InputMediaPhoto from a JSON string
input_media_photo_instance = InputMediaPhoto.from_json(json)
# print the JSON string representation of the object
print(InputMediaPhoto.to_json())

# convert the object into a dict
input_media_photo_dict = input_media_photo_instance.to_dict()
# create an instance of InputMediaPhoto from a dict
input_media_photo_from_dict = InputMediaPhoto.from_dict(input_media_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


