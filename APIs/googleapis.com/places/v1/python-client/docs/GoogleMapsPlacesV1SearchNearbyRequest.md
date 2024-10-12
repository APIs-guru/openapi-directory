# GoogleMapsPlacesV1SearchNearbyRequest

Request proto for Search Nearby. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_primary_types** | **List[str]** | Excluded primary Place type (e.g. \&quot;restaurant\&quot; or \&quot;gas_station\&quot;) from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting primary types, i.e. a type appears in both included_primary_types and excluded_primary_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types &#x3D; [\&quot;restaurant\&quot;], excluded_primary_types &#x3D; [\&quot;restaurant\&quot;]}, the returned places provide \&quot;restaurant\&quot; related services but do not operate primarily as \&quot;restaurants\&quot;. | [optional] 
**excluded_types** | **List[str]** | Excluded Place type (eg, \&quot;restaurant\&quot; or \&quot;gas_station\&quot;) from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If the client provides both included_types (e.g. restaurant) and excluded_types (e.g. cafe), then the response should include places that are restaurant but not cafe. The response includes places that match at least one of the included_types and none of the excluded_types. If there are any conflicting types, i.e. a type appears in both included_types and excluded_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types &#x3D; [\&quot;restaurant\&quot;], excluded_primary_types &#x3D; [\&quot;restaurant\&quot;]}, the returned places provide \&quot;restaurant\&quot; related services but do not operate primarily as \&quot;restaurants\&quot;. | [optional] 
**included_primary_types** | **List[str]** | Included primary Place type (e.g. \&quot;restaurant\&quot; or \&quot;gas_station\&quot;) from https://developers.google.com/maps/documentation/places/web-service/place-types. A place can only have a single primary type from the supported types table associated with it. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting primary types, i.e. a type appears in both included_primary_types and excluded_primary_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types &#x3D; [\&quot;restaurant\&quot;], excluded_primary_types &#x3D; [\&quot;restaurant\&quot;]}, the returned places provide \&quot;restaurant\&quot; related services but do not operate primarily as \&quot;restaurants\&quot;. | [optional] 
**included_types** | **List[str]** | Included Place type (eg, \&quot;restaurant\&quot; or \&quot;gas_station\&quot;) from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting types, i.e. a type appears in both included_types and excluded_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types &#x3D; [\&quot;restaurant\&quot;], excluded_primary_types &#x3D; [\&quot;restaurant\&quot;]}, the returned places provide \&quot;restaurant\&quot; related services but do not operate primarily as \&quot;restaurants\&quot;. | [optional] 
**language_code** | **str** | Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. | [optional] 
**location_restriction** | [**GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction**](GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction.md) |  | [optional] 
**max_result_count** | **int** | Maximum number of results to return. It must be between 1 and 20 (default), inclusively. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned. | [optional] 
**rank_preference** | **str** | How results will be ranked in the response. | [optional] 
**region_code** | **str** | The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_search_nearby_request import GoogleMapsPlacesV1SearchNearbyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1SearchNearbyRequest from a JSON string
google_maps_places_v1_search_nearby_request_instance = GoogleMapsPlacesV1SearchNearbyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1SearchNearbyRequest.to_json())

# convert the object into a dict
google_maps_places_v1_search_nearby_request_dict = google_maps_places_v1_search_nearby_request_instance.to_dict()
# create an instance of GoogleMapsPlacesV1SearchNearbyRequest from a dict
google_maps_places_v1_search_nearby_request_from_dict = GoogleMapsPlacesV1SearchNearbyRequest.from_dict(google_maps_places_v1_search_nearby_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


