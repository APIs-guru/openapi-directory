# HeavyEquipmentsSearchResponse

Heavy Equipments search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | [**List[HeavyEquipmentsSearchFacets]**](HeavyEquipmentsSearchFacets.md) |  | [optional] 
**listings** | [**List[HeavyEquipmentsBaseListing]**](HeavyEquipmentsBaseListing.md) |  | [optional] 
**num_found** | **int** | The number of listings found | [optional] 
**range_facets** | [**List[HeavyEquipmentsSearchRangeFacets]**](HeavyEquipmentsSearchRangeFacets.md) |  | [optional] 
**stats** | [**List[HeavyEquipmentsSearchStats]**](HeavyEquipmentsSearchStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.heavy_equipments_search_response import HeavyEquipmentsSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HeavyEquipmentsSearchResponse from a JSON string
heavy_equipments_search_response_instance = HeavyEquipmentsSearchResponse.from_json(json)
# print the JSON string representation of the object
print(HeavyEquipmentsSearchResponse.to_json())

# convert the object into a dict
heavy_equipments_search_response_dict = heavy_equipments_search_response_instance.to_dict()
# create an instance of HeavyEquipmentsSearchResponse from a dict
heavy_equipments_search_response_from_dict = HeavyEquipmentsSearchResponse.from_dict(heavy_equipments_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


