# CarSearchRangeFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dom** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**dom_180** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**dom_active** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**finance_down_payment** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**finance_emp** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**finance_loan_apr** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**finance_loan_term** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**lease_down_payment** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**lease_emp** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**lease_term** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**miles** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**msrp** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**price** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.car_search_range_facets import CarSearchRangeFacets

# TODO update the JSON string below
json = "{}"
# create an instance of CarSearchRangeFacets from a JSON string
car_search_range_facets_instance = CarSearchRangeFacets.from_json(json)
# print the JSON string representation of the object
print(CarSearchRangeFacets.to_json())

# convert the object into a dict
car_search_range_facets_dict = car_search_range_facets_instance.to_dict()
# create an instance of CarSearchRangeFacets from a dict
car_search_range_facets_from_dict = CarSearchRangeFacets.from_dict(car_search_range_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


