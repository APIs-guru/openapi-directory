# NewPagesItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[NewPagesItemsInnerResultsInner]**](NewPagesItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.new_pages_items_inner import NewPagesItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NewPagesItemsInner from a JSON string
new_pages_items_inner_instance = NewPagesItemsInner.from_json(json)
# print the JSON string representation of the object
print(NewPagesItemsInner.to_json())

# convert the object into a dict
new_pages_items_inner_dict = new_pages_items_inner_instance.to_dict()
# create an instance of NewPagesItemsInner from a dict
new_pages_items_inner_from_dict = NewPagesItemsInner.from_dict(new_pages_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


