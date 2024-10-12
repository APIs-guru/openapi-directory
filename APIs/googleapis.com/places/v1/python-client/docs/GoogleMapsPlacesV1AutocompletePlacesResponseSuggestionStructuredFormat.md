# GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat

Contains a breakdown of a Place or query prediction into main text and secondary text. For Place predictions, the main text contains the specific name of the Place. For query predictions, the main text contains the query. The secondary text contains additional disambiguating features (such as a city or region) to further identify the Place or refine the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**main_text** | [**GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText.md) |  | [optional] 
**secondary_text** | [**GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_response_suggestion_structured_format import GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat from a JSON string
google_maps_places_v1_autocomplete_places_response_suggestion_structured_format_instance = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_response_suggestion_structured_format_dict = google_maps_places_v1_autocomplete_places_response_suggestion_structured_format_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat from a dict
google_maps_places_v1_autocomplete_places_response_suggestion_structured_format_from_dict = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStructuredFormat.from_dict(google_maps_places_v1_autocomplete_places_response_suggestion_structured_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


