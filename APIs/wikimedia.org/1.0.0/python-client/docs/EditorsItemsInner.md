# EditorsItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_level** | **str** |  | [optional] 
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[EditorsItemsInnerResultsInner]**](EditorsItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.editors_items_inner import EditorsItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of EditorsItemsInner from a JSON string
editors_items_inner_instance = EditorsItemsInner.from_json(json)
# print the JSON string representation of the object
print(EditorsItemsInner.to_json())

# convert the object into a dict
editors_items_inner_dict = editors_items_inner_instance.to_dict()
# create an instance of EditorsItemsInner from a dict
editors_items_inner_from_dict = EditorsItemsInner.from_dict(editors_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


