# EditsPerEditorItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[EditsItemsInnerResultsInner]**](EditsItemsInnerResultsInner.md) |  | [optional] 
**user_text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.edits_per_editor_items_inner import EditsPerEditorItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of EditsPerEditorItemsInner from a JSON string
edits_per_editor_items_inner_instance = EditsPerEditorItemsInner.from_json(json)
# print the JSON string representation of the object
print(EditsPerEditorItemsInner.to_json())

# convert the object into a dict
edits_per_editor_items_inner_dict = edits_per_editor_items_inner_instance.to_dict()
# create an instance of EditsPerEditorItemsInner from a dict
edits_per_editor_items_inner_from_dict = EditsPerEditorItemsInner.from_dict(edits_per_editor_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


