# Proto2EnumDescriptorProto

Describes an enum type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**value** | [**List[Proto2EnumValueDescriptorProto]**](Proto2EnumValueDescriptorProto.md) |  | [optional] 

## Example

```python
from openapi_client.models.proto2_enum_descriptor_proto import Proto2EnumDescriptorProto

# TODO update the JSON string below
json = "{}"
# create an instance of Proto2EnumDescriptorProto from a JSON string
proto2_enum_descriptor_proto_instance = Proto2EnumDescriptorProto.from_json(json)
# print the JSON string representation of the object
print(Proto2EnumDescriptorProto.to_json())

# convert the object into a dict
proto2_enum_descriptor_proto_dict = proto2_enum_descriptor_proto_instance.to_dict()
# create an instance of Proto2EnumDescriptorProto from a dict
proto2_enum_descriptor_proto_from_dict = Proto2EnumDescriptorProto.from_dict(proto2_enum_descriptor_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


