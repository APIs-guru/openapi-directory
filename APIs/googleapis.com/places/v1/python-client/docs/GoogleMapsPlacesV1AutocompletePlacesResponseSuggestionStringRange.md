# GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange

Identifies a substring within a given text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_offset** | **int** | Zero-based offset of the last Unicode character (exclusive). | [optional] 
**start_offset** | **int** | Zero-based offset of the first Unicode character of the string (inclusive). | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_response_suggestion_string_range import GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange from a JSON string
google_maps_places_v1_autocomplete_places_response_suggestion_string_range_instance = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_response_suggestion_string_range_dict = google_maps_places_v1_autocomplete_places_response_suggestion_string_range_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange from a dict
google_maps_places_v1_autocomplete_places_response_suggestion_string_range_from_dict = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange.from_dict(google_maps_places_v1_autocomplete_places_response_suggestion_string_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


