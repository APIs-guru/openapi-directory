# SearchGoogleLocationsRequest

Request message for GoogleLocations.SearchGoogleLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**Location**](Location.md) |  | [optional] 
**page_size** | **int** | The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination. | [optional] 
**query** | **str** | Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches. | [optional] 

## Example

```python
from openapi_client.models.search_google_locations_request import SearchGoogleLocationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGoogleLocationsRequest from a JSON string
search_google_locations_request_instance = SearchGoogleLocationsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchGoogleLocationsRequest.to_json())

# convert the object into a dict
search_google_locations_request_dict = search_google_locations_request_instance.to_dict()
# create an instance of SearchGoogleLocationsRequest from a dict
search_google_locations_request_from_dict = SearchGoogleLocationsRequest.from_dict(search_google_locations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


