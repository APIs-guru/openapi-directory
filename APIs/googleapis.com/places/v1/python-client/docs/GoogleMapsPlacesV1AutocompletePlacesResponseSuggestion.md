# GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion

An Autocomplete suggestion result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place_prediction** | [**GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction.md) |  | [optional] 
**query_prediction** | [**GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_response_suggestion import GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion from a JSON string
google_maps_places_v1_autocomplete_places_response_suggestion_instance = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_response_suggestion_dict = google_maps_places_v1_autocomplete_places_response_suggestion_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion from a dict
google_maps_places_v1_autocomplete_places_response_suggestion_from_dict = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestion.from_dict(google_maps_places_v1_autocomplete_places_response_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


