# SafeHtmlProto

IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_do_not_access_or_else_safe_html_wrapped_value** | **str** | IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. | [optional] 

## Example

```python
from openapi_client.models.safe_html_proto import SafeHtmlProto

# TODO update the JSON string below
json = "{}"
# create an instance of SafeHtmlProto from a JSON string
safe_html_proto_instance = SafeHtmlProto.from_json(json)
# print the JSON string representation of the object
print(SafeHtmlProto.to_json())

# convert the object into a dict
safe_html_proto_dict = safe_html_proto_instance.to_dict()
# create an instance of SafeHtmlProto from a dict
safe_html_proto_from_dict = SafeHtmlProto.from_dict(safe_html_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


