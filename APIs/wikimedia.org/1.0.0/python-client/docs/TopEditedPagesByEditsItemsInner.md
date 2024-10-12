# TopEditedPagesByEditsItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[TopEditedPagesByEditsItemsInnerResultsInner]**](TopEditedPagesByEditsItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.top_edited_pages_by_edits_items_inner import TopEditedPagesByEditsItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TopEditedPagesByEditsItemsInner from a JSON string
top_edited_pages_by_edits_items_inner_instance = TopEditedPagesByEditsItemsInner.from_json(json)
# print the JSON string representation of the object
print(TopEditedPagesByEditsItemsInner.to_json())

# convert the object into a dict
top_edited_pages_by_edits_items_inner_dict = top_edited_pages_by_edits_items_inner_instance.to_dict()
# create an instance of TopEditedPagesByEditsItemsInner from a dict
top_edited_pages_by_edits_items_inner_from_dict = TopEditedPagesByEditsItemsInner.from_dict(top_edited_pages_by_edits_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


