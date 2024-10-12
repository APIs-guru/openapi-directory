# RangeFacetItemCountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**lower_bound** | **int** |  | [optional] 
**upper_bound** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.range_facet_item_counts_inner import RangeFacetItemCountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RangeFacetItemCountsInner from a JSON string
range_facet_item_counts_inner_instance = RangeFacetItemCountsInner.from_json(json)
# print the JSON string representation of the object
print(RangeFacetItemCountsInner.to_json())

# convert the object into a dict
range_facet_item_counts_inner_dict = range_facet_item_counts_inner_instance.to_dict()
# create an instance of RangeFacetItemCountsInner from a dict
range_facet_item_counts_inner_from_dict = RangeFacetItemCountsInner.from_dict(range_facet_item_counts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


