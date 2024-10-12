# HeavyEquipmentsSearchRangeFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours_used** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**miles** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**price** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.heavy_equipments_search_range_facets import HeavyEquipmentsSearchRangeFacets

# TODO update the JSON string below
json = "{}"
# create an instance of HeavyEquipmentsSearchRangeFacets from a JSON string
heavy_equipments_search_range_facets_instance = HeavyEquipmentsSearchRangeFacets.from_json(json)
# print the JSON string representation of the object
print(HeavyEquipmentsSearchRangeFacets.to_json())

# convert the object into a dict
heavy_equipments_search_range_facets_dict = heavy_equipments_search_range_facets_instance.to_dict()
# create an instance of HeavyEquipmentsSearchRangeFacets from a dict
heavy_equipments_search_range_facets_from_dict = HeavyEquipmentsSearchRangeFacets.from_dict(heavy_equipments_search_range_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


