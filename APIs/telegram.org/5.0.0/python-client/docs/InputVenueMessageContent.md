# InputVenueMessageContent

Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a venue message to be sent as the result of an inline query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the venue | 
**foursquare_id** | **str** | *Optional*. Foursquare identifier of the venue, if known | [optional] 
**foursquare_type** | **str** | *Optional*. Foursquare type of the venue, if known. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.) | [optional] 
**google_place_id** | **str** | *Optional*. Google Places identifier of the venue | [optional] 
**google_place_type** | **str** | *Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) | [optional] 
**latitude** | **float** | Latitude of the venue in degrees | 
**longitude** | **float** | Longitude of the venue in degrees | 
**title** | **str** | Name of the venue | 

## Example

```python
from openapi_client.models.input_venue_message_content import InputVenueMessageContent

# TODO update the JSON string below
json = "{}"
# create an instance of InputVenueMessageContent from a JSON string
input_venue_message_content_instance = InputVenueMessageContent.from_json(json)
# print the JSON string representation of the object
print(InputVenueMessageContent.to_json())

# convert the object into a dict
input_venue_message_content_dict = input_venue_message_content_instance.to_dict()
# create an instance of InputVenueMessageContent from a dict
input_venue_message_content_from_dict = InputVenueMessageContent.from_dict(input_venue_message_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


