# UKRVSearchRangeFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exterior_length** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**interior_length** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**miles** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**price** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**width** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.ukrv_search_range_facets import UKRVSearchRangeFacets

# TODO update the JSON string below
json = "{}"
# create an instance of UKRVSearchRangeFacets from a JSON string
ukrv_search_range_facets_instance = UKRVSearchRangeFacets.from_json(json)
# print the JSON string representation of the object
print(UKRVSearchRangeFacets.to_json())

# convert the object into a dict
ukrv_search_range_facets_dict = ukrv_search_range_facets_instance.to_dict()
# create an instance of UKRVSearchRangeFacets from a dict
ukrv_search_range_facets_from_dict = UKRVSearchRangeFacets.from_dict(ukrv_search_range_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


