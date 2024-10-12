# RangeFacetItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **int** | Number of listings that have field value after range end | [optional] 
**before** | **int** | Number of listings that have field value before range start | [optional] 
**between** | **int** | Number of listings that have field value between range start and range end | [optional] 
**counts** | [**List[RangeFacetItemCountsInner]**](RangeFacetItemCountsInner.md) |  | [optional] 
**end** | **int** | The end of range | [optional] 
**gap** | **int** | The range gap applied for range faceting | [optional] 
**start** | **int** | The start of range | [optional] 

## Example

```python
from openapi_client.models.range_facet_item import RangeFacetItem

# TODO update the JSON string below
json = "{}"
# create an instance of RangeFacetItem from a JSON string
range_facet_item_instance = RangeFacetItem.from_json(json)
# print the JSON string representation of the object
print(RangeFacetItem.to_json())

# convert the object into a dict
range_facet_item_dict = range_facet_item_instance.to_dict()
# create an instance of RangeFacetItem from a dict
range_facet_item_from_dict = RangeFacetItem.from_dict(range_facet_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


