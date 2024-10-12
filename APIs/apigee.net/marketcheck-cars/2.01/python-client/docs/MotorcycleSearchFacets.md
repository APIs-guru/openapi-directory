# MotorcycleSearchFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**city** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**cylinders** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**dealer_id** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**drivetrain** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**fuel_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**inventory_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**make** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**model** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seller_name** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**source** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**state** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**transmission** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**trim** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**vehicle_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**year** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.motorcycle_search_facets import MotorcycleSearchFacets

# TODO update the JSON string below
json = "{}"
# create an instance of MotorcycleSearchFacets from a JSON string
motorcycle_search_facets_instance = MotorcycleSearchFacets.from_json(json)
# print the JSON string representation of the object
print(MotorcycleSearchFacets.to_json())

# convert the object into a dict
motorcycle_search_facets_dict = motorcycle_search_facets_instance.to_dict()
# create an instance of MotorcycleSearchFacets from a dict
motorcycle_search_facets_from_dict = MotorcycleSearchFacets.from_dict(motorcycle_search_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


