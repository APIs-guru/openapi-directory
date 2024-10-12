# GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText

Text representing a Place or query prediction. The text may be used as is or formatted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matches** | [**List[GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange]**](GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionStringRange.md) | A list of string ranges identifying where the input request matched in &#x60;text&#x60;. The ranges can be used to format specific parts of &#x60;text&#x60;. The substrings may not be exact matches of &#x60;input&#x60; if the matching was determined by criteria other than string matching (for example, spell corrections or transliterations). These values are Unicode character offsets of &#x60;text&#x60;. The ranges are guaranteed to be ordered in increasing offset values. | [optional] 
**text** | **str** | Text that may be used as is or formatted with &#x60;matches&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_response_suggestion_formattable_text import GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText from a JSON string
google_maps_places_v1_autocomplete_places_response_suggestion_formattable_text_instance = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_response_suggestion_formattable_text_dict = google_maps_places_v1_autocomplete_places_response_suggestion_formattable_text_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText from a dict
google_maps_places_v1_autocomplete_places_response_suggestion_formattable_text_from_dict = GoogleMapsPlacesV1AutocompletePlacesResponseSuggestionFormattableText.from_dict(google_maps_places_v1_autocomplete_places_response_suggestion_formattable_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


