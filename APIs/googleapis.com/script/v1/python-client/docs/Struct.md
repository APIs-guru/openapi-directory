# Struct

`Struct` represents a structured data value, consisting of fields which map to dynamically typed values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Dict[str, Value]**](Value.md) | Unordered map of dynamically typed values. | [optional] 

## Example

```python
from openapi_client.models.struct import Struct

# TODO update the JSON string below
json = "{}"
# create an instance of Struct from a JSON string
struct_instance = Struct.from_json(json)
# print the JSON string representation of the object
print(Struct.to_json())

# convert the object into a dict
struct_dict = struct_instance.to_dict()
# create an instance of Struct from a dict
struct_from_dict = Struct.from_dict(struct_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


