# UKRVSearchFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**berths** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**category** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**chassis** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**city** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**dealer_id** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**drive_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**drivetrain** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**engine** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**exterior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**fuel_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**interior_color** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**inventory_type** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**make** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**model** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**postal_code** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**seller_name** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**source** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**state** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**steering** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**sub_category** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**transmission** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**year** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 
**zip** | [**List[FacetItem]**](FacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.ukrv_search_facets import UKRVSearchFacets

# TODO update the JSON string below
json = "{}"
# create an instance of UKRVSearchFacets from a JSON string
ukrv_search_facets_instance = UKRVSearchFacets.from_json(json)
# print the JSON string representation of the object
print(UKRVSearchFacets.to_json())

# convert the object into a dict
ukrv_search_facets_dict = ukrv_search_facets_instance.to_dict()
# create an instance of UKRVSearchFacets from a dict
ukrv_search_facets_from_dict = UKRVSearchFacets.from_dict(ukrv_search_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


