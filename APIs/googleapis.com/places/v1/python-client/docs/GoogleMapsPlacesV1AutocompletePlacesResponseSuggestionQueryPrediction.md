# GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction

Prediction results for a Query Autocomplete prediction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**structured_format** | [**GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat.md) |  | [optional] 
**text** | [**GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_response_suggestion_query_prediction import GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction from a JSON string
google_maps_places_v1_autocomplete_places_response_suggestion_query_prediction_instance = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_response_suggestion_query_prediction_dict = google_maps_places_v1_autocomplete_places_response_suggestion_query_prediction_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction from a dict
google_maps_places_v1_autocomplete_places_response_suggestion_query_prediction_from_dict = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionQueryPrediction.from_dict(google_maps_places_v1_autocomplete_places_response_suggestion_query_prediction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


