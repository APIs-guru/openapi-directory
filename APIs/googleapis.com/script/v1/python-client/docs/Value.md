# Value

`Value` represents a dynamically typed value which is the outcome of an executed script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Represents a boolean value. | [optional] 
**bytes_value** | **bytearray** | Represents raw byte values. | [optional] 
**date_value** | **str** | Represents a date in ms since the epoch. | [optional] 
**list_value** | [**ListValue**](ListValue.md) |  | [optional] 
**null_value** | **str** | Represents a null value. | [optional] 
**number_value** | **float** | Represents a double value. | [optional] 
**proto_value** | **Dict[str, object]** | Represents a structured proto value. | [optional] 
**string_value** | **str** | Represents a string value. | [optional] 
**struct_value** | [**Struct**](Struct.md) |  | [optional] 

## Example

```python
from openapi_client.models.value import Value

# TODO update the JSON string below
json = "{}"
# create an instance of Value from a JSON string
value_instance = Value.from_json(json)
# print the JSON string representation of the object
print(Value.to_json())

# convert the object into a dict
value_dict = value_instance.to_dict()
# create an instance of Value from a dict
value_from_dict = Value.from_dict(value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


