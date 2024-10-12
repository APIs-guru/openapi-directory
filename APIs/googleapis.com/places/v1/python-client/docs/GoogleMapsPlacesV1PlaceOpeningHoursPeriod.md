# GoogleMapsPlacesV1PlaceOpeningHoursPeriod

A period the place remains in open_now status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**close** | [**GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint**](GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint.md) |  | [optional] 
**open** | [**GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint**](GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_opening_hours_period import GoogleMapsPlacesV1PlaceOpeningHoursPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceOpeningHoursPeriod from a JSON string
google_maps_places_v1_place_opening_hours_period_instance = GoogleMapsPlacesV1PlaceOpeningHoursPeriod.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceOpeningHoursPeriod.to_json())

# convert the object into a dict
google_maps_places_v1_place_opening_hours_period_dict = google_maps_places_v1_place_opening_hours_period_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceOpeningHoursPeriod from a dict
google_maps_places_v1_place_opening_hours_period_from_dict = GoogleMapsPlacesV1PlaceOpeningHoursPeriod.from_dict(google_maps_places_v1_place_opening_hours_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


