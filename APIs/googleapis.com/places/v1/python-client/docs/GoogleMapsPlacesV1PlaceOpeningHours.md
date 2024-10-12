# GoogleMapsPlacesV1PlaceOpeningHours

Information about business hour of the place.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**open_now** | **bool** | Is this place open right now? Always present unless we lack time-of-day or timezone data for these opening hours. | [optional] 
**periods** | [**List[GoogleMapsPlacesV1PlaceOpeningHoursPeriod]**](GoogleMapsPlacesV1PlaceOpeningHoursPeriod.md) | The periods that this place is open during the week. The periods are in chronological order, starting with Sunday in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations. | [optional] 
**secondary_hours_type** | **str** | A type string used to identify the type of secondary hours. | [optional] 
**special_days** | [**List[GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay]**](GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay.md) | Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. Set for current_opening_hours and current_secondary_opening_hours if there are exceptional hours. | [optional] 
**weekday_descriptions** | **List[str]** | Localized strings describing the opening hours of this place, one string for each day of the week. Will be empty if the hours are unknown or could not be converted to localized text. Example: \&quot;Sun: 18:00–06:00\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_opening_hours import GoogleMapsPlacesV1PlaceOpeningHours

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceOpeningHours from a JSON string
google_maps_places_v1_place_opening_hours_instance = GoogleMapsPlacesV1PlaceOpeningHours.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceOpeningHours.to_json())

# convert the object into a dict
google_maps_places_v1_place_opening_hours_dict = google_maps_places_v1_place_opening_hours_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceOpeningHours from a dict
google_maps_places_v1_place_opening_hours_from_dict = GoogleMapsPlacesV1PlaceOpeningHours.from_dict(google_maps_places_v1_place_opening_hours_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


