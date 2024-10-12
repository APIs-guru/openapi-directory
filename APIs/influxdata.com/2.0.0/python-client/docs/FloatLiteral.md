# FloatLiteral

Represents floating point numbers according to the double representations defined by the IEEE-754-1985

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.float_literal import FloatLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of FloatLiteral from a JSON string
float_literal_instance = FloatLiteral.from_json(json)
# print the JSON string representation of the object
print(FloatLiteral.to_json())

# convert the object into a dict
float_literal_dict = float_literal_instance.to_dict()
# create an instance of FloatLiteral from a dict
float_literal_from_dict = FloatLiteral.from_dict(float_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


