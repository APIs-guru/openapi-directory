# CategoryItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge_url** | **str** |  | [optional] 
**category_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.category_items_inner import CategoryItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryItemsInner from a JSON string
category_items_inner_instance = CategoryItemsInner.from_json(json)
# print the JSON string representation of the object
print(CategoryItemsInner.to_json())

# convert the object into a dict
category_items_inner_dict = category_items_inner_instance.to_dict()
# create an instance of CategoryItemsInner from a dict
category_items_inner_from_dict = CategoryItemsInner.from_dict(category_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


