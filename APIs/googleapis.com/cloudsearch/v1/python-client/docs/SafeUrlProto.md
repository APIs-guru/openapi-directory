# SafeUrlProto

Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_do_not_access_or_else_safe_url_wrapped_value** | **str** | IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. | [optional] 

## Example

```python
from openapi_client.models.safe_url_proto import SafeUrlProto

# TODO update the JSON string below
json = "{}"
# create an instance of SafeUrlProto from a JSON string
safe_url_proto_instance = SafeUrlProto.from_json(json)
# print the JSON string representation of the object
print(SafeUrlProto.to_json())

# convert the object into a dict
safe_url_proto_dict = safe_url_proto_instance.to_dict()
# create an instance of SafeUrlProto from a dict
safe_url_proto_from_dict = SafeUrlProto.from_dict(safe_url_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


