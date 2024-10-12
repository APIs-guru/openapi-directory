# AbsoluteBytesDifferencePerEditorItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[AbsoluteBytesDifferenceItemsInnerResultsInner]**](AbsoluteBytesDifferenceItemsInnerResultsInner.md) |  | [optional] 
**user_text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.absolute_bytes_difference_per_editor_items_inner import AbsoluteBytesDifferencePerEditorItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AbsoluteBytesDifferencePerEditorItemsInner from a JSON string
absolute_bytes_difference_per_editor_items_inner_instance = AbsoluteBytesDifferencePerEditorItemsInner.from_json(json)
# print the JSON string representation of the object
print(AbsoluteBytesDifferencePerEditorItemsInner.to_json())

# convert the object into a dict
absolute_bytes_difference_per_editor_items_inner_dict = absolute_bytes_difference_per_editor_items_inner_instance.to_dict()
# create an instance of AbsoluteBytesDifferencePerEditorItemsInner from a dict
absolute_bytes_difference_per_editor_items_inner_from_dict = AbsoluteBytesDifferencePerEditorItemsInner.from_dict(absolute_bytes_difference_per_editor_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


