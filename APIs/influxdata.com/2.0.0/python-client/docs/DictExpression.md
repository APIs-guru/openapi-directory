# DictExpression

Used to create and directly specify the elements of a dictionary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elements** | [**List[DictItem]**](DictItem.md) | Elements of the dictionary | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.dict_expression import DictExpression

# TODO update the JSON string below
json = "{}"
# create an instance of DictExpression from a JSON string
dict_expression_instance = DictExpression.from_json(json)
# print the JSON string representation of the object
print(DictExpression.to_json())

# convert the object into a dict
dict_expression_dict = dict_expression_instance.to_dict()
# create an instance of DictExpression from a dict
dict_expression_from_dict = DictExpression.from_dict(dict_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


