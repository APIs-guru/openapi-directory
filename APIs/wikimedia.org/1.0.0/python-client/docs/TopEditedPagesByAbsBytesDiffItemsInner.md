# TopEditedPagesByAbsBytesDiffItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[TopEditedPagesByAbsBytesDiffItemsInnerResultsInner]**](TopEditedPagesByAbsBytesDiffItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.top_edited_pages_by_abs_bytes_diff_items_inner import TopEditedPagesByAbsBytesDiffItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TopEditedPagesByAbsBytesDiffItemsInner from a JSON string
top_edited_pages_by_abs_bytes_diff_items_inner_instance = TopEditedPagesByAbsBytesDiffItemsInner.from_json(json)
# print the JSON string representation of the object
print(TopEditedPagesByAbsBytesDiffItemsInner.to_json())

# convert the object into a dict
top_edited_pages_by_abs_bytes_diff_items_inner_dict = top_edited_pages_by_abs_bytes_diff_items_inner_instance.to_dict()
# create an instance of TopEditedPagesByAbsBytesDiffItemsInner from a dict
top_edited_pages_by_abs_bytes_diff_items_inner_from_dict = TopEditedPagesByAbsBytesDiffItemsInner.from_dict(top_edited_pages_by_abs_bytes_diff_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


