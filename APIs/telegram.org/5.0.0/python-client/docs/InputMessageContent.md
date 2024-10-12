# InputMessageContent

This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_web_page_preview** | **bool** | *Optional*. Disables link previews for links in the sent message | [optional] 
**entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in message text, which can be specified instead of *parse\\_mode* | [optional] 
**message_text** | **str** | Text of the message to be sent, 1-4096 characters | 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**heading** | **int** | *Optional*. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. | [optional] 
**horizontal_accuracy** | **float** | *Optional*. The radius of uncertainty for the location, measured in meters; 0-1500 | [optional] 
**latitude** | **float** | Latitude of the venue in degrees | 
**live_period** | **int** | *Optional*. Period in seconds for which the location can be updated, should be between 60 and 86400. | [optional] 
**longitude** | **float** | Longitude of the venue in degrees | 
**proximity_alert_radius** | **int** | *Optional*. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. | [optional] 
**address** | **str** | Address of the venue | 
**foursquare_id** | **str** | *Optional*. Foursquare identifier of the venue, if known | [optional] 
**foursquare_type** | **str** | *Optional*. Foursquare type of the venue, if known. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.) | [optional] 
**google_place_id** | **str** | *Optional*. Google Places identifier of the venue | [optional] 
**google_place_type** | **str** | *Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) | [optional] 
**title** | **str** | Name of the venue | 
**first_name** | **str** | Contact&#39;s first name | 
**last_name** | **str** | *Optional*. Contact&#39;s last name | [optional] 
**phone_number** | **str** | Contact&#39;s phone number | 
**vcard** | **str** | *Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes | [optional] 

## Example

```python
from openapi_client.models.input_message_content import InputMessageContent

# TODO update the JSON string below
json = "{}"
# create an instance of InputMessageContent from a JSON string
input_message_content_instance = InputMessageContent.from_json(json)
# print the JSON string representation of the object
print(InputMessageContent.to_json())

# convert the object into a dict
input_message_content_dict = input_message_content_instance.to_dict()
# create an instance of InputMessageContent from a dict
input_message_content_from_dict = InputMessageContent.from_dict(input_message_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


