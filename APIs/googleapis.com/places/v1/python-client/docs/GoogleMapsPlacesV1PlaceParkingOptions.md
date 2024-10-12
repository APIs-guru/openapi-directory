# GoogleMapsPlacesV1PlaceParkingOptions

Information about parking options for the place. A parking lot could support more than one option at the same time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_garage_parking** | **bool** | Place offers free garage parking. | [optional] 
**free_parking_lot** | **bool** | Place offers free parking lots. | [optional] 
**free_street_parking** | **bool** | Place offers free street parking. | [optional] 
**paid_garage_parking** | **bool** | Place offers paid garage parking. | [optional] 
**paid_parking_lot** | **bool** | Place offers paid parking lots. | [optional] 
**paid_street_parking** | **bool** | Place offers paid street parking. | [optional] 
**valet_parking** | **bool** | Place offers valet parking. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_parking_options import GoogleMapsPlacesV1PlaceParkingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceParkingOptions from a JSON string
google_maps_places_v1_place_parking_options_instance = GoogleMapsPlacesV1PlaceParkingOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceParkingOptions.to_json())

# convert the object into a dict
google_maps_places_v1_place_parking_options_dict = google_maps_places_v1_place_parking_options_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceParkingOptions from a dict
google_maps_places_v1_place_parking_options_from_dict = GoogleMapsPlacesV1PlaceParkingOptions.from_dict(google_maps_places_v1_place_parking_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


