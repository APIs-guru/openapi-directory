# GoogleMapsPlacesV1SearchTextRequest

Request proto for SearchText. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**included_type** | **str** | The requested place type. Full list of types supported: https://developers.google.com/maps/documentation/places/web-service/place-types. Only support one included type. | [optional] 
**language_code** | **str** | Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. | [optional] 
**location_bias** | [**GoogleMapsPlacesV1SearchTextRequestLocationBias**](GoogleMapsPlacesV1SearchTextRequestLocationBias.md) |  | [optional] 
**location_restriction** | [**GoogleMapsPlacesV1SearchTextRequestLocationRestriction**](GoogleMapsPlacesV1SearchTextRequestLocationRestriction.md) |  | [optional] 
**max_result_count** | **int** | Maximum number of results to return. It must be between 1 and 20, inclusively. The default is 20. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned. | [optional] 
**min_rating** | **float** | Filter out results whose average user rating is strictly less than this limit. A valid value must be a float between 0 and 5 (inclusively) at a 0.5 cadence i.e. [0, 0.5, 1.0, ... , 5.0] inclusively. The input rating will round up to the nearest 0.5(ceiling). For instance, a rating of 0.6 will eliminate all results with a less than 1.0 rating. | [optional] 
**open_now** | **bool** | Used to restrict the search to places that are currently open. The default is false. | [optional] 
**price_levels** | **List[str]** | Used to restrict the search to places that are marked as certain price levels. Users can choose any combinations of price levels. Default to select all price levels. | [optional] 
**rank_preference** | **str** | How results will be ranked in the response. | [optional] 
**region_code** | **str** | The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. | [optional] 
**strict_type_filtering** | **bool** | Used to set strict type filtering for included_type. If set to true, only results of the same type will be returned. Default to false. | [optional] 
**text_query** | **str** | Required. The text query for textual search. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_search_text_request import GoogleMapsPlacesV1SearchTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1SearchTextRequest from a JSON string
google_maps_places_v1_search_text_request_instance = GoogleMapsPlacesV1SearchTextRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1SearchTextRequest.to_json())

# convert the object into a dict
google_maps_places_v1_search_text_request_dict = google_maps_places_v1_search_text_request_instance.to_dict()
# create an instance of GoogleMapsPlacesV1SearchTextRequest from a dict
google_maps_places_v1_search_text_request_from_dict = GoogleMapsPlacesV1SearchTextRequest.from_dict(google_maps_places_v1_search_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


