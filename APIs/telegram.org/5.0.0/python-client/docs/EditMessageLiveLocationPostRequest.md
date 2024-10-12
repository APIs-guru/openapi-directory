# EditMessageLiveLocationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**EditMessageCaptionPostRequestChatId**](EditMessageCaptionPostRequestChatId.md) |  | [optional] 
**heading** | **int** | Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. | [optional] 
**horizontal_accuracy** | **float** | The radius of uncertainty for the location, measured in meters; 0-1500 | [optional] 
**inline_message_id** | **str** | Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message | [optional] 
**latitude** | **float** | Latitude of new location | 
**longitude** | **float** | Longitude of new location | 
**message_id** | **int** | Required if *inline\\_message\\_id* is not specified. Identifier of the message to edit | [optional] 
**proximity_alert_radius** | **int** | Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 

## Example

```python
from openapi_client.models.edit_message_live_location_post_request import EditMessageLiveLocationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditMessageLiveLocationPostRequest from a JSON string
edit_message_live_location_post_request_instance = EditMessageLiveLocationPostRequest.from_json(json)
# print the JSON string representation of the object
print(EditMessageLiveLocationPostRequest.to_json())

# convert the object into a dict
edit_message_live_location_post_request_dict = edit_message_live_location_post_request_instance.to_dict()
# create an instance of EditMessageLiveLocationPostRequest from a dict
edit_message_live_location_post_request_from_dict = EditMessageLiveLocationPostRequest.from_dict(edit_message_live_location_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


