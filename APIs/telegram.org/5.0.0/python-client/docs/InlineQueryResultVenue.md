# InlineQueryResultVenue

Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the venue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the venue | 
**foursquare_id** | **str** | *Optional*. Foursquare identifier of the venue if known | [optional] 
**foursquare_type** | **str** | *Optional*. Foursquare type of the venue, if known. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.) | [optional] 
**google_place_id** | **str** | *Optional*. Google Places identifier of the venue | [optional] 
**google_place_type** | **str** | *Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) | [optional] 
**id** | **str** | Unique identifier for this result, 1-64 Bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**latitude** | **float** | Latitude of the venue location in degrees | 
**longitude** | **float** | Longitude of the venue location in degrees | 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**thumb_height** | **int** | *Optional*. Thumbnail height | [optional] 
**thumb_url** | **str** | *Optional*. Url of the thumbnail for the result | [optional] 
**thumb_width** | **int** | *Optional*. Thumbnail width | [optional] 
**title** | **str** | Title of the venue | 
**type** | **str** | Type of the result, must be *venue* | 

## Example

```python
from openapi_client.models.inline_query_result_venue import InlineQueryResultVenue

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultVenue from a JSON string
inline_query_result_venue_instance = InlineQueryResultVenue.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultVenue.to_json())

# convert the object into a dict
inline_query_result_venue_dict = inline_query_result_venue_instance.to_dict()
# create an instance of InlineQueryResultVenue from a dict
inline_query_result_venue_from_dict = InlineQueryResultVenue.from_dict(inline_query_result_venue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


