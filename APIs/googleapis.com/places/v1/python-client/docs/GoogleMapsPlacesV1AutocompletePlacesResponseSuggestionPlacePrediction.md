# GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction

Prediction results for a Place Autocomplete prediction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance_meters** | **int** | The length of the geodesic in meters from &#x60;origin&#x60; if &#x60;origin&#x60; is specified. Certain predictions such as routes may not populate this field. | [optional] 
**place** | **str** | The resource name of the suggested Place. This name can be used in other APIs that accept Place names. | [optional] 
**place_id** | **str** | The unique identifier of the suggested Place. This identifier can be used in other APIs that accept Place IDs. | [optional] 
**structured_format** | [**GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat.md) |  | [optional] 
**text** | [**GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText.md) |  | [optional] 
**types** | **List[str]** | List of types that apply to this Place from Table A or Table B in https://developers.google.com/maps/documentation/places/web-service/place-types. A type is a categorization of a Place. Places with shared types will share similar characteristics. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_response_suggestion_place_prediction import GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction from a JSON string
google_maps_places_v1_autocomplete_places_response_suggestion_place_prediction_instance = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_response_suggestion_place_prediction_dict = google_maps_places_v1_autocomplete_places_response_suggestion_place_prediction_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction from a dict
google_maps_places_v1_autocomplete_places_response_suggestion_place_prediction_from_dict = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionPlacePrediction.from_dict(google_maps_places_v1_autocomplete_places_response_suggestion_place_prediction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


