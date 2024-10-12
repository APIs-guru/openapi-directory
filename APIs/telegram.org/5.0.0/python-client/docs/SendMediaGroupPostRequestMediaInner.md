# SendMediaGroupPostRequestMediaInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | *Optional*. Caption of the video to be sent, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**duration** | **int** | *Optional*. Video duration | [optional] 
**media** | **str** | File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\\_attach\\_name&gt;” to upload a new one using multipart/form-data under &lt;file\\_attach\\_name&gt; name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files) | 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**performer** | **str** | *Optional*. Performer of the audio | [optional] 
**thumb** | **str** |  | [optional] 
**title** | **str** | *Optional*. Title of the audio | [optional] 
**type** | **str** | Type of the result, must be *video* | 
**disable_content_type_detection** | **bool** | *Optional*. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album. | [optional] 
**height** | **int** | *Optional*. Video height | [optional] 
**supports_streaming** | **bool** | *Optional*. Pass *True*, if the uploaded video is suitable for streaming | [optional] 
**width** | **int** | *Optional*. Video width | [optional] 

## Example

```python
from openapi_client.models.send_media_group_post_request_media_inner import SendMediaGroupPostRequestMediaInner

# TODO update the JSON string below
json = "{}"
# create an instance of SendMediaGroupPostRequestMediaInner from a JSON string
send_media_group_post_request_media_inner_instance = SendMediaGroupPostRequestMediaInner.from_json(json)
# print the JSON string representation of the object
print(SendMediaGroupPostRequestMediaInner.to_json())

# convert the object into a dict
send_media_group_post_request_media_inner_dict = send_media_group_post_request_media_inner_instance.to_dict()
# create an instance of SendMediaGroupPostRequestMediaInner from a dict
send_media_group_post_request_media_inner_from_dict = SendMediaGroupPostRequestMediaInner.from_dict(send_media_group_post_request_media_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


