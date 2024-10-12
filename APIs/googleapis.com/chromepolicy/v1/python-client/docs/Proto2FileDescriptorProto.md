# Proto2FileDescriptorProto

Describes a complete .proto file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edition_deprecated** | **str** | BEGIN GOOGLE-INTERNAL TODO(b/297898292) Deprecate and remove this field in favor of enums. END GOOGLE-INTERNAL | [optional] 
**enum_type** | [**List[Proto2EnumDescriptorProto]**](Proto2EnumDescriptorProto.md) |  | [optional] 
**message_type** | [**List[Proto2DescriptorProto]**](Proto2DescriptorProto.md) | All top-level definitions in this file. | [optional] 
**name** | **str** | file name, relative to root of source tree | [optional] 
**package** | **str** | e.g. \&quot;foo\&quot;, \&quot;foo.bar\&quot;, etc. | [optional] 
**syntax** | **str** | The syntax of the proto file. The supported values are \&quot;proto2\&quot;, \&quot;proto3\&quot;, and \&quot;editions\&quot;. If &#x60;edition&#x60; is present, this value must be \&quot;editions\&quot;. | [optional] 

## Example

```python
from openapi_client.models.proto2_file_descriptor_proto import Proto2FileDescriptorProto

# TODO update the JSON string below
json = "{}"
# create an instance of Proto2FileDescriptorProto from a JSON string
proto2_file_descriptor_proto_instance = Proto2FileDescriptorProto.from_json(json)
# print the JSON string representation of the object
print(Proto2FileDescriptorProto.to_json())

# convert the object into a dict
proto2_file_descriptor_proto_dict = proto2_file_descriptor_proto_instance.to_dict()
# create an instance of Proto2FileDescriptorProto from a dict
proto2_file_descriptor_proto_from_dict = Proto2FileDescriptorProto.from_dict(proto2_file_descriptor_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


