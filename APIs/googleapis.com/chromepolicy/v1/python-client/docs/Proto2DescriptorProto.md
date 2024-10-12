# Proto2DescriptorProto

Describes a message type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enum_type** | [**List[Proto2EnumDescriptorProto]**](Proto2EnumDescriptorProto.md) |  | [optional] 
**var_field** | [**List[Proto2FieldDescriptorProto]**](Proto2FieldDescriptorProto.md) |  | [optional] 
**name** | **str** |  | [optional] 
**nested_type** | [**List[Proto2DescriptorProto]**](Proto2DescriptorProto.md) |  | [optional] 
**oneof_decl** | [**List[Proto2OneofDescriptorProto]**](Proto2OneofDescriptorProto.md) |  | [optional] 

## Example

```python
from openapi_client.models.proto2_descriptor_proto import Proto2DescriptorProto

# TODO update the JSON string below
json = "{}"
# create an instance of Proto2DescriptorProto from a JSON string
proto2_descriptor_proto_instance = Proto2DescriptorProto.from_json(json)
# print the JSON string representation of the object
print(Proto2DescriptorProto.to_json())

# convert the object into a dict
proto2_descriptor_proto_dict = proto2_descriptor_proto_instance.to_dict()
# create an instance of Proto2DescriptorProto from a dict
proto2_descriptor_proto_from_dict = Proto2DescriptorProto.from_dict(proto2_descriptor_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


