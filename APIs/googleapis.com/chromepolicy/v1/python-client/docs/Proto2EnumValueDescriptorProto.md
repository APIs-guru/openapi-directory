# Proto2EnumValueDescriptorProto

Describes a value within an enum.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**number** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.proto2_enum_value_descriptor_proto import Proto2EnumValueDescriptorProto

# TODO update the JSON string below
json = "{}"
# create an instance of Proto2EnumValueDescriptorProto from a JSON string
proto2_enum_value_descriptor_proto_instance = Proto2EnumValueDescriptorProto.from_json(json)
# print the JSON string representation of the object
print(Proto2EnumValueDescriptorProto.to_json())

# convert the object into a dict
proto2_enum_value_descriptor_proto_dict = proto2_enum_value_descriptor_proto_instance.to_dict()
# create an instance of Proto2EnumValueDescriptorProto from a dict
proto2_enum_value_descriptor_proto_from_dict = Proto2EnumValueDescriptorProto.from_dict(proto2_enum_value_descriptor_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


