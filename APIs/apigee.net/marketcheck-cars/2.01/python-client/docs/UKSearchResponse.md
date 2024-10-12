# UKSearchResponse

Search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | [**UKCarSearchFacets**](UKCarSearchFacets.md) |  | [optional] 
**listings** | [**List[UKBaseListing]**](UKBaseListing.md) |  | [optional] 
**num_found** | **int** | The number of listings found | [optional] 
**range_facets** | [**CarSearchRangeFacets**](CarSearchRangeFacets.md) |  | [optional] 
**stats** | [**CarSearchStats**](CarSearchStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.uk_search_response import UKSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UKSearchResponse from a JSON string
uk_search_response_instance = UKSearchResponse.from_json(json)
# print the JSON string representation of the object
print(UKSearchResponse.to_json())

# convert the object into a dict
uk_search_response_dict = uk_search_response_instance.to_dict()
# create an instance of UKSearchResponse from a dict
uk_search_response_from_dict = UKSearchResponse.from_dict(uk_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


