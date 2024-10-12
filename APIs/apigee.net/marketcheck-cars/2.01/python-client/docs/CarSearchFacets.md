# CarSearchFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_exterior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**base_interior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**body_subtype** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**body_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**car_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**carfax_1_owner** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**carfax_clean_title** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**city** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**cylinders** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**data_source** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**dealer_id** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**dealer_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**doors** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**drivetrain** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine_aspiration** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine_block** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine_size** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**exterior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**fuel_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**interior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**make** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**model** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seller_name** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seller_name_o** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seller_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**source** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**state** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**transmission** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**trim** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**trim_o** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**trim_r** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**vehicle_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**year** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.car_search_facets import CarSearchFacets

# TODO update the JSON string below
json = "{}"
# create an instance of CarSearchFacets from a JSON string
car_search_facets_instance = CarSearchFacets.from_json(json)
# print the JSON string representation of the object
print(CarSearchFacets.to_json())

# convert the object into a dict
car_search_facets_dict = car_search_facets_instance.to_dict()
# create an instance of CarSearchFacets from a dict
car_search_facets_from_dict = CarSearchFacets.from_dict(car_search_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


