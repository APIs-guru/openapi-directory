# RVSearchResponse

RV search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | [**List[RVSearchFacets]**](RVSearchFacets.md) |  | [optional] 
**listings** | [**List[RVBaseListing]**](RVBaseListing.md) |  | [optional] 
**num_found** | **int** | The number of listings found | [optional] 
**range_facets** | [**List[MotorcycleSearchRangeFacets]**](MotorcycleSearchRangeFacets.md) |  | [optional] 
**stats** | [**List[MotorcycleSearchStats]**](MotorcycleSearchStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.rv_search_response import RVSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RVSearchResponse from a JSON string
rv_search_response_instance = RVSearchResponse.from_json(json)
# print the JSON string representation of the object
print(RVSearchResponse.to_json())

# convert the object into a dict
rv_search_response_dict = rv_search_response_instance.to_dict()
# create an instance of RVSearchResponse from a dict
rv_search_response_from_dict = RVSearchResponse.from_dict(rv_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


