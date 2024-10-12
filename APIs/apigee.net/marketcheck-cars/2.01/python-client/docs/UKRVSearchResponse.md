# UKRVSearchResponse

RV search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | [**List[UKRVSearchFacets]**](UKRVSearchFacets.md) |  | [optional] 
**listings** | [**List[UKRVBaseListing]**](UKRVBaseListing.md) |  | [optional] 
**num_found** | **int** | The number of listings found | [optional] 
**range_facets** | [**List[UKRVSearchRangeFacets]**](UKRVSearchRangeFacets.md) |  | [optional] 
**stats** | [**List[MotorcycleSearchStats]**](MotorcycleSearchStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.ukrv_search_response import UKRVSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UKRVSearchResponse from a JSON string
ukrv_search_response_instance = UKRVSearchResponse.from_json(json)
# print the JSON string representation of the object
print(UKRVSearchResponse.to_json())

# convert the object into a dict
ukrv_search_response_dict = ukrv_search_response_instance.to_dict()
# create an instance of UKRVSearchResponse from a dict
ukrv_search_response_from_dict = UKRVSearchResponse.from_dict(ukrv_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


