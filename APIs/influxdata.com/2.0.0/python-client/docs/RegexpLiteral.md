# RegexpLiteral

Expressions begin and end with `/` and are regular expressions with syntax accepted by RE2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.regexp_literal import RegexpLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of RegexpLiteral from a JSON string
regexp_literal_instance = RegexpLiteral.from_json(json)
# print the JSON string representation of the object
print(RegexpLiteral.to_json())

# convert the object into a dict
regexp_literal_dict = regexp_literal_instance.to_dict()
# create an instance of RegexpLiteral from a dict
regexp_literal_from_dict = RegexpLiteral.from_dict(regexp_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


