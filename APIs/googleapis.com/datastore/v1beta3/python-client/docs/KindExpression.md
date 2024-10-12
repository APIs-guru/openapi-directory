# KindExpression

A representation of a kind.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the kind. | [optional] 

## Example

```python
from openapi_client.models.kind_expression import KindExpression

# TODO update the JSON string below
json = "{}"
# create an instance of KindExpression from a JSON string
kind_expression_instance = KindExpression.from_json(json)
# print the JSON string representation of the object
print(KindExpression.to_json())

# convert the object into a dict
kind_expression_dict = kind_expression_instance.to_dict()
# create an instance of KindExpression from a dict
kind_expression_from_dict = KindExpression.from_dict(kind_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


