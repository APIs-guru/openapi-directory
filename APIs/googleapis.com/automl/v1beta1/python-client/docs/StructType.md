# StructType

`StructType` defines the DataType-s of a STRUCT type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Dict[str, DataType]**](DataType.md) | Unordered map of struct field names to their data types. Fields cannot be added or removed via Update. Their names and data types are still mutable. | [optional] 

## Example

```python
from openapi_client.models.struct_type import StructType

# TODO update the JSON string below
json = "{}"
# create an instance of StructType from a JSON string
struct_type_instance = StructType.from_json(json)
# print the JSON string representation of the object
print(StructType.to_json())

# convert the object into a dict
struct_type_dict = struct_type_instance.to_dict()
# create an instance of StructType from a dict
struct_type_from_dict = StructType.from_dict(struct_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


