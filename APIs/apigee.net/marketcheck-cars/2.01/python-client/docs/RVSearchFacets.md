# RVSearchFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**awnings** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**city** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**var_class** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**dealer_id** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**exterior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**fuel_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**interior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**inventory_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**length** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**make** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**model** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seller_name** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**sleeps** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**slideouts** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**source** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**state** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**transmission** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**year** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.rv_search_facets import RVSearchFacets

# TODO update the JSON string below
json = "{}"
# create an instance of RVSearchFacets from a JSON string
rv_search_facets_instance = RVSearchFacets.from_json(json)
# print the JSON string representation of the object
print(RVSearchFacets.to_json())

# convert the object into a dict
rv_search_facets_dict = rv_search_facets_instance.to_dict()
# create an instance of RVSearchFacets from a dict
rv_search_facets_from_dict = RVSearchFacets.from_dict(rv_search_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


