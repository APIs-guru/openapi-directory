# Venue

This object represents a venue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the venue | 
**foursquare_id** | **str** | *Optional*. Foursquare identifier of the venue | [optional] 
**foursquare_type** | **str** | *Optional*. Foursquare type of the venue. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.) | [optional] 
**google_place_id** | **str** | *Optional*. Google Places identifier of the venue | [optional] 
**google_place_type** | **str** | *Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).) | [optional] 
**location** | [**Location**](Location.md) |  | 
**title** | **str** | Name of the venue | 

## Example

```python
from openapi_client.models.venue import Venue

# TODO update the JSON string below
json = "{}"
# create an instance of Venue from a JSON string
venue_instance = Venue.from_json(json)
# print the JSON string representation of the object
print(Venue.to_json())

# convert the object into a dict
venue_dict = venue_instance.to_dict()
# create an instance of Venue from a dict
venue_from_dict = Venue.from_dict(venue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


