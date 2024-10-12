# SendVenuePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the venue | 
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**foursquare_id** | **str** | Foursquare identifier of the venue | [optional] 
**foursquare_type** | **str** | Foursquare type of the venue, if known. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.) | [optional] 
**google_place_id** | **str** | Google Places identifier of the venue | [optional] 
**google_place_type** | **str** | Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) | [optional] 
**latitude** | **float** | Latitude of the venue | 
**longitude** | **float** | Longitude of the venue | 
**reply_markup** | [**CopyMessagePostRequestReplyMarkup**](CopyMessagePostRequestReplyMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 
**title** | **str** | Name of the venue | 

## Example

```python
from openapi_client.models.send_venue_post_request import SendVenuePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendVenuePostRequest from a JSON string
send_venue_post_request_instance = SendVenuePostRequest.from_json(json)
# print the JSON string representation of the object
print(SendVenuePostRequest.to_json())

# convert the object into a dict
send_venue_post_request_dict = send_venue_post_request_instance.to_dict()
# create an instance of SendVenuePostRequest from a dict
send_venue_post_request_from_dict = SendVenuePostRequest.from_dict(send_venue_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


