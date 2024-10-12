# StructType

`StructType` defines the fields of a STRUCT type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ModelField]**](ModelField.md) | The list of fields that make up this struct. Order is significant, because values of this struct type are represented as lists, where the order of field values matches the order of fields in the StructType. In turn, the order of fields matches the order of columns in a read request, or the order of fields in the &#x60;SELECT&#x60; clause of a query. | [optional] 

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


