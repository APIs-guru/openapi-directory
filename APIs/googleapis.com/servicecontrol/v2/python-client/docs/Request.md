# Request

This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | [**Auth**](Auth.md) |  | [optional] 
**headers** | **Dict[str, str]** | The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. | [optional] 
**host** | **str** | The HTTP request &#x60;Host&#x60; header value. | [optional] 
**id** | **str** | The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service. | [optional] 
**method** | **str** | The HTTP request method, such as &#x60;GET&#x60;, &#x60;POST&#x60;. | [optional] 
**path** | **str** | The HTTP URL path, excluding the query parameters. | [optional] 
**protocol** | **str** | The network protocol used with the request, such as \&quot;http/1.1\&quot;, \&quot;spdy/3\&quot;, \&quot;h2\&quot;, \&quot;h2c\&quot;, \&quot;webrtc\&quot;, \&quot;tcp\&quot;, \&quot;udp\&quot;, \&quot;quic\&quot;. See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details. | [optional] 
**query** | **str** | The HTTP URL query in the format of &#x60;name1&#x3D;value1&amp;name2&#x3D;value2&#x60;, as it appears in the first line of the HTTP request. No decoding is performed. | [optional] 
**reason** | **str** | A special parameter for request reason. It is used by security systems to associate auditing information with a request. | [optional] 
**scheme** | **str** | The HTTP URL scheme, such as &#x60;http&#x60; and &#x60;https&#x60;. | [optional] 
**size** | **str** | The HTTP request size in bytes. If unknown, it must be -1. | [optional] 
**time** | **str** | The timestamp when the &#x60;destination&#x60; service receives the last byte of the request. | [optional] 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


