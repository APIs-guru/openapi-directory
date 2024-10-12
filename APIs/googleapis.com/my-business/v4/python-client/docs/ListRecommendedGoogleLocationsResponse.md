# ListRecommendedGoogleLocationsResponse

Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_locations** | [**List[GoogleLocation]**](GoogleLocation.md) | The locations recommended to a Business Profile account. Each of these represents a GoogleLocation that is present on Maps. The locations are sorted in decreasing order of relevance to the Business Profile account. | [optional] 
**next_page_token** | **str** | During pagination, if there are more locations available to be fetched in the next page, this field is populated with a token to fetch the next page of locations in a subsequent call. If there are no more locations to be fetched, this field is not present in the response. | [optional] 
**total_size** | **int** | The total number of recommended locations for this Business Profile account, irrespective of pagination. | [optional] 

## Example

```python
from openapi_client.models.list_recommended_google_locations_response import ListRecommendedGoogleLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRecommendedGoogleLocationsResponse from a JSON string
list_recommended_google_locations_response_instance = ListRecommendedGoogleLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRecommendedGoogleLocationsResponse.to_json())

# convert the object into a dict
list_recommended_google_locations_response_dict = list_recommended_google_locations_response_instance.to_dict()
# create an instance of ListRecommendedGoogleLocationsResponse from a dict
list_recommended_google_locations_response_from_dict = ListRecommendedGoogleLocationsResponse.from_dict(list_recommended_google_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


