# Symbol

A single symbol representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | [**BoundingPoly**](BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of the OCR results for the symbol. Range [0, 1]. | [optional] 
**var_property** | [**TextProperty**](TextProperty.md) |  | [optional] 
**text** | **str** | The actual UTF-8 representation of the symbol. | [optional] 

## Example

```python
from openapi_client.models.symbol import Symbol

# TODO update the JSON string below
json = "{}"
# create an instance of Symbol from a JSON string
symbol_instance = Symbol.from_json(json)
# print the JSON string representation of the object
print(Symbol.to_json())

# convert the object into a dict
symbol_dict = symbol_instance.to_dict()
# create an instance of Symbol from a dict
symbol_from_dict = Symbol.from_dict(symbol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


