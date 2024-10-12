# NumericVariable

Numeric variable represents a single continuous numeric signal that can be reconstructed using interpolation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**Tsx**](Tsx.md) |  | [optional] 
**interpolation** | [**Interpolation**](Interpolation.md) |  | [optional] 
**value** | [**Tsx**](Tsx.md) |  | [optional] 

## Example

```python
from openapi_client.models.numeric_variable import NumericVariable

# TODO update the JSON string below
json = "{}"
# create an instance of NumericVariable from a JSON string
numeric_variable_instance = NumericVariable.from_json(json)
# print the JSON string representation of the object
print(NumericVariable.to_json())

# convert the object into a dict
numeric_variable_dict = numeric_variable_instance.to_dict()
# create an instance of NumericVariable from a dict
numeric_variable_from_dict = NumericVariable.from_dict(numeric_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


