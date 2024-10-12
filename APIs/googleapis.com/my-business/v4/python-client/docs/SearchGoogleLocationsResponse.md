# SearchGoogleLocationsResponse

Response message for GoogleLocations.SearchGoogleLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_locations** | [**List[GoogleLocation]**](GoogleLocation.md) | A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy. | [optional] 

## Example

```python
from openapi_client.models.search_google_locations_response import SearchGoogleLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGoogleLocationsResponse from a JSON string
search_google_locations_response_instance = SearchGoogleLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchGoogleLocationsResponse.to_json())

# convert the object into a dict
search_google_locations_response_dict = search_google_locations_response_instance.to_dict()
# create an instance of SearchGoogleLocationsResponse from a dict
search_google_locations_response_from_dict = SearchGoogleLocationsResponse.from_dict(search_google_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


