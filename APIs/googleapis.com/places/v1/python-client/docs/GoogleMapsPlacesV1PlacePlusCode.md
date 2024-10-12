# GoogleMapsPlacesV1PlacePlusCode

Plus code (http://plus.codes) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compound_code** | **str** | Place&#39;s compound code, such as \&quot;33GV+HQ, Ramberg, Norway\&quot;, containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity. | [optional] 
**global_code** | **str** | Place&#39;s global (full) code, such as \&quot;9FWM33GV+HQ\&quot;, representing an 1/8000 by 1/8000 degree area (~14 by 14 meters). | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_plus_code import GoogleMapsPlacesV1PlacePlusCode

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlacePlusCode from a JSON string
google_maps_places_v1_place_plus_code_instance = GoogleMapsPlacesV1PlacePlusCode.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlacePlusCode.to_json())

# convert the object into a dict
google_maps_places_v1_place_plus_code_dict = google_maps_places_v1_place_plus_code_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlacePlusCode from a dict
google_maps_places_v1_place_plus_code_from_dict = GoogleMapsPlacesV1PlacePlusCode.from_dict(google_maps_places_v1_place_plus_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


