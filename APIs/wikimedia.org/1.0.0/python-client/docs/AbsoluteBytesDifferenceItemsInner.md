# AbsoluteBytesDifferenceItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[AbsoluteBytesDifferenceItemsInnerResultsInner]**](AbsoluteBytesDifferenceItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.absolute_bytes_difference_items_inner import AbsoluteBytesDifferenceItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AbsoluteBytesDifferenceItemsInner from a JSON string
absolute_bytes_difference_items_inner_instance = AbsoluteBytesDifferenceItemsInner.from_json(json)
# print the JSON string representation of the object
print(AbsoluteBytesDifferenceItemsInner.to_json())

# convert the object into a dict
absolute_bytes_difference_items_inner_dict = absolute_bytes_difference_items_inner_instance.to_dict()
# create an instance of AbsoluteBytesDifferenceItemsInner from a dict
absolute_bytes_difference_items_inner_from_dict = AbsoluteBytesDifferenceItemsInner.from_dict(absolute_bytes_difference_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


