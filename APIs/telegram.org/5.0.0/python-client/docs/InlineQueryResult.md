# InlineQueryResult

This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_file_id** | **str** | A valid file identifier for the audio file | 
**caption** | **str** | *Optional*. Caption, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**type** | **str** | Type of the result, must be *voice* | 
**description** | **str** | *Optional*. Short description of the result | [optional] 
**document_file_id** | **str** | A valid file identifier for the file | 
**title** | **str** | Recording title | 
**gif_file_id** | **str** | A valid file identifier for the GIF file | 
**mpeg4_file_id** | **str** | A valid file identifier for the MP4 file | 
**photo_file_id** | **str** | A valid file identifier of the photo | 
**sticker_file_id** | **str** | A valid file identifier of the sticker | 
**video_file_id** | **str** | A valid file identifier for the video file | 
**voice_file_id** | **str** | A valid file identifier for the voice message | 
**hide_url** | **bool** | *Optional*. Pass *True*, if you don&#39;t want the URL to be shown in the message | [optional] 
**thumb_height** | **int** | *Optional*. Thumbnail height | [optional] 
**thumb_url** | **str** | URL of the thumbnail (jpeg only) for the video | 
**thumb_width** | **int** | *Optional*. Thumbnail width | [optional] 
**url** | **str** | *Optional*. URL of the result | [optional] 
**audio_duration** | **int** | *Optional*. Audio duration in seconds | [optional] 
**audio_url** | **str** | A valid URL for the audio file | 
**performer** | **str** | *Optional*. Performer | [optional] 
**first_name** | **str** | Contact&#39;s first name | 
**last_name** | **str** | *Optional*. Contact&#39;s last name | [optional] 
**phone_number** | **str** | Contact&#39;s phone number | 
**vcard** | **str** | *Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes | [optional] 
**game_short_name** | **str** | Short name of the game | 
**document_url** | **str** | A valid URL for the file | 
**mime_type** | **str** | Mime type of the content of video url, “text/html” or “video/mp4” | 
**gif_duration** | **int** | *Optional*. Duration of the GIF | [optional] 
**gif_height** | **int** | *Optional*. Height of the GIF | [optional] 
**gif_url** | **str** | A valid URL for the GIF file. File size must not exceed 1MB | 
**gif_width** | **int** | *Optional*. Width of the GIF | [optional] 
**thumb_mime_type** | **str** | *Optional*. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” | [optional] [default to 'image/jpeg']
**heading** | **int** | *Optional*. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. | [optional] 
**horizontal_accuracy** | **float** | *Optional*. The radius of uncertainty for the location, measured in meters; 0-1500 | [optional] 
**latitude** | **float** | Latitude of the venue location in degrees | 
**live_period** | **int** | *Optional*. Period in seconds for which the location can be updated, should be between 60 and 86400. | [optional] 
**longitude** | **float** | Longitude of the venue location in degrees | 
**proximity_alert_radius** | **int** | *Optional*. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. | [optional] 
**mpeg4_duration** | **int** | *Optional*. Video duration | [optional] 
**mpeg4_height** | **int** | *Optional*. Video height | [optional] 
**mpeg4_url** | **str** | A valid URL for the MP4 file. File size must not exceed 1MB | 
**mpeg4_width** | **int** | *Optional*. Video width | [optional] 
**photo_height** | **int** | *Optional*. Height of the photo | [optional] 
**photo_url** | **str** | A valid URL of the photo. Photo must be in **jpeg** format. Photo size must not exceed 5MB | 
**photo_width** | **int** | *Optional*. Width of the photo | [optional] 
**address** | **str** | Address of the venue | 
**foursquare_id** | **str** | *Optional*. Foursquare identifier of the venue if known | [optional] 
**foursquare_type** | **str** | *Optional*. Foursquare type of the venue, if known. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.) | [optional] 
**google_place_id** | **str** | *Optional*. Google Places identifier of the venue | [optional] 
**google_place_type** | **str** | *Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) | [optional] 
**video_duration** | **int** | *Optional*. Video duration in seconds | [optional] 
**video_height** | **int** | *Optional*. Video height | [optional] 
**video_url** | **str** | A valid URL for the embedded video player or video file | 
**video_width** | **int** | *Optional*. Video width | [optional] 
**voice_duration** | **int** | *Optional*. Recording duration in seconds | [optional] 
**voice_url** | **str** | A valid URL for the voice recording | 

## Example

```python
from openapi_client.models.inline_query_result import InlineQueryResult

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResult from a JSON string
inline_query_result_instance = InlineQueryResult.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResult.to_json())

# convert the object into a dict
inline_query_result_dict = inline_query_result_instance.to_dict()
# create an instance of InlineQueryResult from a dict
inline_query_result_from_dict = InlineQueryResult.from_dict(inline_query_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


