# GoogleMapsPlacesV1AutocompletePlacesRequest

Request proto for AutocompletePlaces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_query_predictions** | **bool** | Optional. If true, the response will include both Place and query predictions. Otherwise the response will only return Place predictions. | [optional] 
**included_primary_types** | **List[str]** | Optional. Included primary Place type (for example, \&quot;restaurant\&quot; or \&quot;gas_station\&quot;) from https://developers.google.com/maps/documentation/places/web-service/place-types. A Place is only returned if its primary type is included in this list. Up to 5 values can be specified. If no types are specified, all Place types are returned. | [optional] 
**included_region_codes** | **List[str]** | Optional. Only include results in the specified regions, specified as up to 15 CLDR two-character region codes. An empty set will not restrict the results. If both &#x60;location_restriction&#x60; and &#x60;included_region_codes&#x60; are set, the results will be located in the area of intersection. | [optional] 
**input** | **str** | Required. The text string on which to search. | [optional] 
**input_offset** | **int** | Optional. A zero-based Unicode character offset of &#x60;input&#x60; indicating the cursor position in &#x60;input&#x60;. The cursor position may influence what predictions are returned. If empty, defaults to the length of &#x60;input&#x60;. | [optional] 
**language_code** | **str** | Optional. The language in which to return results. Defaults to en-US. The results may be in mixed languages if the language used in &#x60;input&#x60; is different from &#x60;language_code&#x60; or if the returned Place does not have a translation from the local language to &#x60;language_code&#x60;. | [optional] 
**location_bias** | [**GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias**](GoogleMapsPlacesV1AutocompletePlacesRequestLocationBias.md) |  | [optional] 
**location_restriction** | [**GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction**](GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction.md) |  | [optional] 
**origin** | [**GoogleTypeLatLng**](GoogleTypeLatLng.md) |  | [optional] 
**region_code** | **str** | Optional. The region code, specified as a CLDR two-character region code. This affects address formatting, result ranking, and may influence what results are returned. This does not restrict results to the specified region. To restrict results to a region, use &#x60;region_code_restriction&#x60;. | [optional] 
**session_token** | **str** | Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned. The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the &#x60;session_token&#x60; parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately). We recommend the following guidelines: * Use session tokens for all Place Autocomplete calls. * Generate a fresh token for each session. Using a version 4 UUID is recommended. * Ensure that the credentials used for all Place Autocomplete, Place Details, and Address Validation requests within a session belong to the same Cloud Console project. * Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_request import GoogleMapsPlacesV1AutocompletePlacesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesRequest from a JSON string
google_maps_places_v1_autocomplete_places_request_instance = GoogleMapsPlacesV1AutocompletePlacesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesRequest.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_request_dict = google_maps_places_v1_autocomplete_places_request_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesRequest from a dict
google_maps_places_v1_autocomplete_places_request_from_dict = GoogleMapsPlacesV1AutocompletePlacesRequest.from_dict(google_maps_places_v1_autocomplete_places_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


