# GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay

Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_opening_hours_special_day import GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay from a JSON string
google_maps_places_v1_place_opening_hours_special_day_instance = GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay.to_json())

# convert the object into a dict
google_maps_places_v1_place_opening_hours_special_day_dict = google_maps_places_v1_place_opening_hours_special_day_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay from a dict
google_maps_places_v1_place_opening_hours_special_day_from_dict = GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay.from_dict(google_maps_places_v1_place_opening_hours_special_day_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


