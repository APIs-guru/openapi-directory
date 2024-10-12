# GoogleMapsPlacesV1PlaceSubDestination

Place resource name and id of sub destinations that relate to the place. For example, different terminals are different destinations of an airport.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The place id of the sub destination. | [optional] 
**name** | **str** | The resource name of the sub destination. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_sub_destination import GoogleMapsPlacesV1PlaceSubDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceSubDestination from a JSON string
google_maps_places_v1_place_sub_destination_instance = GoogleMapsPlacesV1PlaceSubDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceSubDestination.to_json())

# convert the object into a dict
google_maps_places_v1_place_sub_destination_dict = google_maps_places_v1_place_sub_destination_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceSubDestination from a dict
google_maps_places_v1_place_sub_destination_from_dict = GoogleMapsPlacesV1PlaceSubDestination.from_dict(google_maps_places_v1_place_sub_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


