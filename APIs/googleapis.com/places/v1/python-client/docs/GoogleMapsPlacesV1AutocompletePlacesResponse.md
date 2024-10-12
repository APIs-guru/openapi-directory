# GoogleMapsPlacesV1AutocompletePlacesResponse

Response proto for AutocompletePlaces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggestions** | [**List[GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion]**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion.md) | Contains a list of suggestions, ordered in descending order of relevance. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_response import GoogleMapsPlacesV1AutocompletePlacesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponse from a JSON string
google_maps_places_v1_autocomplete_places_response_instance = GoogleMapsPlacesV1AutocompletePlacesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesResponse.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_response_dict = google_maps_places_v1_autocomplete_places_response_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponse from a dict
google_maps_places_v1_autocomplete_places_response_from_dict = GoogleMapsPlacesV1AutocompletePlacesResponse.from_dict(google_maps_places_v1_autocomplete_places_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


