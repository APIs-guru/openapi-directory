# EditsPerPageItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_title** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[EditsItemsInnerResultsInner]**](EditsItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.edits_per_page_items_inner import EditsPerPageItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of EditsPerPageItemsInner from a JSON string
edits_per_page_items_inner_instance = EditsPerPageItemsInner.from_json(json)
# print the JSON string representation of the object
print(EditsPerPageItemsInner.to_json())

# convert the object into a dict
edits_per_page_items_inner_dict = edits_per_page_items_inner_instance.to_dict()
# create an instance of EditsPerPageItemsInner from a dict
edits_per_page_items_inner_from_dict = EditsPerPageItemsInner.from_dict(edits_per_page_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


