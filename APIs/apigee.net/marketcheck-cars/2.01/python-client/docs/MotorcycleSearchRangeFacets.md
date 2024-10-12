# MotorcycleSearchRangeFacets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**miles** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 
**price** | [**List[RangeFacetItem]**](RangeFacetItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.motorcycle_search_range_facets import MotorcycleSearchRangeFacets

# TODO update the JSON string below
json = "{}"
# create an instance of MotorcycleSearchRangeFacets from a JSON string
motorcycle_search_range_facets_instance = MotorcycleSearchRangeFacets.from_json(json)
# print the JSON string representation of the object
print(MotorcycleSearchRangeFacets.to_json())

# convert the object into a dict
motorcycle_search_range_facets_dict = motorcycle_search_range_facets_instance.to_dict()
# create an instance of MotorcycleSearchRangeFacets from a dict
motorcycle_search_range_facets_from_dict = MotorcycleSearchRangeFacets.from_dict(motorcycle_search_range_facets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


