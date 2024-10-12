# Http

Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fully_decode_reserved_expansion** | **bool** | When set to true, URL path parameters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where \&quot;%2F\&quot; will be left encoded. The default behavior is to not decode RFC 6570 reserved characters in multi segment matches. | [optional] 
**rules** | [**List[HttpRule]**](HttpRule.md) | A list of HTTP configuration rules that apply to individual API methods. **NOTE:** All service configuration rules follow \&quot;last one wins\&quot; order. | [optional] 

## Example

```python
from openapi_client.models.http import Http

# TODO update the JSON string below
json = "{}"
# create an instance of Http from a JSON string
http_instance = Http.from_json(json)
# print the JSON string representation of the object
print(Http.to_json())

# convert the object into a dict
http_dict = http_instance.to_dict()
# create an instance of Http from a dict
http_from_dict = Http.from_dict(http_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


