# XPSStructType

`StructType` defines the DataType-s of a STRUCT type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Dict[str, XPSDataType]**](XPSDataType.md) | Unordered map of struct field names to their data types. | [optional] 

## Example

```python
from openapi_client.models.xps_struct_type import XPSStructType

# TODO update the JSON string below
json = "{}"
# create an instance of XPSStructType from a JSON string
xps_struct_type_instance = XPSStructType.from_json(json)
# print the JSON string representation of the object
print(XPSStructType.to_json())

# convert the object into a dict
xps_struct_type_dict = xps_struct_type_instance.to_dict()
# create an instance of XPSStructType from a dict
xps_struct_type_from_dict = XPSStructType.from_dict(xps_struct_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


