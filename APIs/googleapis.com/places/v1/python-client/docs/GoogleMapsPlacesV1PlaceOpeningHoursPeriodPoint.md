# GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint

Status changing points.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**day** | **int** | A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc. | [optional] 
**hour** | **int** | The hour in 2 digits. Ranges from 00 to 23. | [optional] 
**minute** | **int** | The minute in 2 digits. Ranges from 00 to 59. | [optional] 
**truncated** | **bool** | Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 * 7 hours from midnight of the day of the request are returned. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_opening_hours_period_point import GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint from a JSON string
google_maps_places_v1_place_opening_hours_period_point_instance = GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint.to_json())

# convert the object into a dict
google_maps_places_v1_place_opening_hours_period_point_dict = google_maps_places_v1_place_opening_hours_period_point_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint from a dict
google_maps_places_v1_place_opening_hours_period_point_from_dict = GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint.from_dict(google_maps_places_v1_place_opening_hours_period_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


