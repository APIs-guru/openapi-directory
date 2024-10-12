# EditsItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[EditsItemsInnerResultsInner]**](EditsItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.edits_items_inner import EditsItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of EditsItemsInner from a JSON string
edits_items_inner_instance = EditsItemsInner.from_json(json)
# print the JSON string representation of the object
print(EditsItemsInner.to_json())

# convert the object into a dict
edits_items_inner_dict = edits_items_inner_instance.to_dict()
# create an instance of EditsItemsInner from a dict
edits_items_inner_from_dict = EditsItemsInner.from_dict(edits_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


