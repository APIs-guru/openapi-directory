# EditedPagesItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_level** | **str** |  | [optional] 
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[EditedPagesItemsInnerResultsInner]**](EditedPagesItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.edited_pages_items_inner import EditedPagesItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of EditedPagesItemsInner from a JSON string
edited_pages_items_inner_instance = EditedPagesItemsInner.from_json(json)
# print the JSON string representation of the object
print(EditedPagesItemsInner.to_json())

# convert the object into a dict
edited_pages_items_inner_dict = edited_pages_items_inner_instance.to_dict()
# create an instance of EditedPagesItemsInner from a dict
edited_pages_items_inner_from_dict = EditedPagesItemsInner.from_dict(edited_pages_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


