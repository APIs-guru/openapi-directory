# MotorcycleSearchResponse

Motorcycle search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | [**List[MotorcycleSearchFacets]**](MotorcycleSearchFacets.md) |  | [optional] 
**listings** | [**List[MotorcycleBaseListing]**](MotorcycleBaseListing.md) |  | [optional] 
**num_found** | **int** | The number of listings found | [optional] 
**range_facets** | [**List[MotorcycleSearchRangeFacets]**](MotorcycleSearchRangeFacets.md) |  | [optional] 
**stats** | [**List[MotorcycleSearchStats]**](MotorcycleSearchStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.motorcycle_search_response import MotorcycleSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MotorcycleSearchResponse from a JSON string
motorcycle_search_response_instance = MotorcycleSearchResponse.from_json(json)
# print the JSON string representation of the object
print(MotorcycleSearchResponse.to_json())

# convert the object into a dict
motorcycle_search_response_dict = motorcycle_search_response_instance.to_dict()
# create an instance of MotorcycleSearchResponse from a dict
motorcycle_search_response_from_dict = MotorcycleSearchResponse.from_dict(motorcycle_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


