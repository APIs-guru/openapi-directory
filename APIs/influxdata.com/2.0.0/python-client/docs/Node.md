# Node


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elements** | [**List[DictItem]**](DictItem.md) | Elements of the dictionary | [optional] 
**type** | **str** | Type of AST node | [optional] 
**body** | [**List[Statement]**](Statement.md) | Block body | [optional] 
**params** | [**List[ModelProperty]**](ModelProperty.md) | Function parameters | [optional] 
**left** | [**Expression**](Expression.md) |  | [optional] 
**operator** | **str** |  | [optional] 
**right** | [**Expression**](Expression.md) |  | [optional] 
**arguments** | [**List[Expression]**](Expression.md) | Function arguments | [optional] 
**callee** | [**Expression**](Expression.md) |  | [optional] 
**alternate** | [**Expression**](Expression.md) |  | [optional] 
**consequent** | [**Expression**](Expression.md) |  | [optional] 
**test** | [**Expression**](Expression.md) |  | [optional] 
**object** | [**Expression**](Expression.md) |  | [optional] 
**var_property** | [**PropertyKey**](PropertyKey.md) |  | [optional] 
**array** | [**Expression**](Expression.md) |  | [optional] 
**index** | [**Expression**](Expression.md) |  | [optional] 
**properties** | [**List[ModelProperty]**](ModelProperty.md) | Object properties | [optional] 
**expression** | [**Expression**](Expression.md) |  | [optional] 
**argument** | [**Expression**](Expression.md) |  | [optional] 
**call** | [**CallExpression**](CallExpression.md) |  | [optional] 
**value** | **str** |  | [optional] 
**values** | [**List[Duration]**](Duration.md) | Duration values | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.node import Node

# TODO update the JSON string below
json = "{}"
# create an instance of Node from a JSON string
node_instance = Node.from_json(json)
# print the JSON string representation of the object
print(Node.to_json())

# convert the object into a dict
node_dict = node_instance.to_dict()
# create an instance of Node from a dict
node_from_dict = Node.from_dict(node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


