# TopEditorsByNetBytesDiffItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[TopEditorsByNetBytesDiffItemsInnerResultsInner]**](TopEditorsByNetBytesDiffItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.top_editors_by_net_bytes_diff_items_inner import TopEditorsByNetBytesDiffItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TopEditorsByNetBytesDiffItemsInner from a JSON string
top_editors_by_net_bytes_diff_items_inner_instance = TopEditorsByNetBytesDiffItemsInner.from_json(json)
# print the JSON string representation of the object
print(TopEditorsByNetBytesDiffItemsInner.to_json())

# convert the object into a dict
top_editors_by_net_bytes_diff_items_inner_dict = top_editors_by_net_bytes_diff_items_inner_instance.to_dict()
# create an instance of TopEditorsByNetBytesDiffItemsInner from a dict
top_editors_by_net_bytes_diff_items_inner_from_dict = TopEditorsByNetBytesDiffItemsInner.from_dict(top_editors_by_net_bytes_diff_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


