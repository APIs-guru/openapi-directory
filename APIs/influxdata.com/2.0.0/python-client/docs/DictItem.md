# DictItem

A key/value pair in a dictionary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 
**val** | [**Expression**](Expression.md) |  | [optional] 

## Example

```python
from openapi_client.models.dict_item import DictItem

# TODO update the JSON string below
json = "{}"
# create an instance of DictItem from a JSON string
dict_item_instance = DictItem.from_json(json)
# print the JSON string representation of the object
print(DictItem.to_json())

# convert the object into a dict
dict_item_dict = dict_item_instance.to_dict()
# create an instance of DictItem from a dict
dict_item_from_dict = DictItem.from_dict(dict_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


