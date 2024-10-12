# Expression

Azure Data Factory expression definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Expression type. | 
**value** | **str** | Expression value. | 

## Example

```python
from openapi_client.models.expression import Expression

# TODO update the JSON string below
json = "{}"
# create an instance of Expression from a JSON string
expression_instance = Expression.from_json(json)
# print the JSON string representation of the object
print(Expression.to_json())

# convert the object into a dict
expression_dict = expression_instance.to_dict()
# create an instance of Expression from a dict
expression_from_dict = Expression.from_dict(expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


