# Option

A protocol buffer option, which can be attached to a message, field, enumeration, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The option&#39;s name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, \&quot;map_entry\&quot;. For custom options, it should be the fully-qualified name. For example, \&quot;google.api.http\&quot;. | [optional] 
**value** | **Dict[str, object]** | The option&#39;s value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type. | [optional] 

## Example

```python
from openapi_client.models.option import Option

# TODO update the JSON string below
json = "{}"
# create an instance of Option from a JSON string
option_instance = Option.from_json(json)
# print the JSON string representation of the object
print(Option.to_json())

# convert the object into a dict
option_dict = option_instance.to_dict()
# create an instance of Option from a dict
option_from_dict = Option.from_dict(option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


