# SendLocationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**heading** | **int** | For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. | [optional] 
**horizontal_accuracy** | **float** | The radius of uncertainty for the location, measured in meters; 0-1500 | [optional] 
**latitude** | **float** | Latitude of the location | 
**live_period** | **int** | Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400. | [optional] 
**longitude** | **float** | Longitude of the location | 
**proximity_alert_radius** | **int** | For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. | [optional] 
**reply_markup** | [**CopyMessagePostRequestReplyMarkup**](CopyMessagePostRequestReplyMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 

## Example

```python
from openapi_client.models.send_location_post_request import SendLocationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendLocationPostRequest from a JSON string
send_location_post_request_instance = SendLocationPostRequest.from_json(json)
# print the JSON string representation of the object
print(SendLocationPostRequest.to_json())

# convert the object into a dict
send_location_post_request_dict = send_location_post_request_instance.to_dict()
# create an instance of SendLocationPostRequest from a dict
send_location_post_request_from_dict = SendLocationPostRequest.from_dict(send_location_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


