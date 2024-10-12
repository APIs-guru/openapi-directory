# UKCarSearchFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_exterior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**base_interior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**body_subtype** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**body_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**car_location_city** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**car_location_county** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**car_location_seller_name** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**car_location_street** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**car_location_zip** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**car_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**carfax_1_owner** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**carfax_clean_title** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**city** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**co2_emissions** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**cylinders** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**data_source** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**dealer_id** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**dealer_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**dealership_group_name** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**doors** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**drivetrain** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine_aspiration** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine_block** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine_size** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**exterior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**fca_status** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**fuel_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**in_transit** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**insurance_group** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**interior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**make** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**mas_code** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**model** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**num_owners** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**powertrain_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seating_capacity** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seller_name** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seller_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**source** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**state** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**transmission** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**trim** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**vehicle_registration_mark** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**vehicle_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**vrm** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**year** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.uk_car_search_facets import UKCarSearchFacets

# TODO update the JSON string below
json = "{}"
# create an instance of UKCarSearchFacets from a JSON string
uk_car_search_facets_instance = UKCarSearchFacets.from_json(json)
# print the JSON string representation of the object
print(UKCarSearchFacets.to_json())

# convert the object into a dict
uk_car_search_facets_dict = uk_car_search_facets_instance.to_dict()
# create an instance of UKCarSearchFacets from a dict
uk_car_search_facets_from_dict = UKCarSearchFacets.from_dict(uk_car_search_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


