# TopEditorsByEditsItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[TopEditorsByEditsItemsInnerResultsInner]**](TopEditorsByEditsItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.top_editors_by_edits_items_inner import TopEditorsByEditsItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TopEditorsByEditsItemsInner from a JSON string
top_editors_by_edits_items_inner_instance = TopEditorsByEditsItemsInner.from_json(json)
# print the JSON string representation of the object
print(TopEditorsByEditsItemsInner.to_json())

# convert the object into a dict
top_editors_by_edits_items_inner_dict = top_editors_by_edits_items_inner_instance.to_dict()
# create an instance of TopEditorsByEditsItemsInner from a dict
top_editors_by_edits_items_inner_from_dict = TopEditorsByEditsItemsInner.from_dict(top_editors_by_edits_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


