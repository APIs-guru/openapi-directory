# HttpBody

Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | The HTTP Content-Type header value specifying the content type of the body. | [optional] 
**data** | **bytearray** | The HTTP request/response body as raw binary. | [optional] 
**extensions** | **List[Dict[str, object]]** | Application specific response metadata. Must be set in the first response for streaming APIs. | [optional] 

## Example

```python
from openapi_client.models.http_body import HttpBody

# TODO update the JSON string below
json = "{}"
# create an instance of HttpBody from a JSON string
http_body_instance = HttpBody.from_json(json)
# print the JSON string representation of the object
print(HttpBody.to_json())

# convert the object into a dict
http_body_dict = http_body_instance.to_dict()
# create an instance of HttpBody from a dict
http_body_from_dict = HttpBody.from_dict(http_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


