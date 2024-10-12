# HttpRequest

A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_fill_bytes** | **str** | The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. | [optional] 
**cache_hit** | **bool** | Whether or not an entity was served from cache (with or without validation). | [optional] 
**cache_lookup** | **bool** | Whether or not a cache lookup was attempted. | [optional] 
**cache_validated_with_origin_server** | **bool** | Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True. | [optional] 
**latency** | **str** | The request processing latency on the server, from the time the request was received until the response was sent. | [optional] 
**protocol** | **str** | Protocol used for the request. Examples: \&quot;HTTP/1.1\&quot;, \&quot;HTTP/2\&quot;, \&quot;websocket\&quot; | [optional] 
**referer** | **str** | The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (https://datatracker.ietf.org/doc/html/rfc2616#section-14.36). | [optional] 
**remote_ip** | **str** | The IP address (IPv4 or IPv6) of the client that issued the HTTP request. This field can include port information. Examples: \&quot;192.168.1.1\&quot;, \&quot;10.0.0.1:80\&quot;, \&quot;FE80::0202:B3FF:FE1E:8329\&quot;. | [optional] 
**request_method** | **str** | The request method. Examples: \&quot;GET\&quot;, \&quot;HEAD\&quot;, \&quot;PUT\&quot;, \&quot;POST\&quot;. | [optional] 
**request_size** | **str** | The size of the HTTP request message in bytes, including the request headers and the request body. | [optional] 
**request_url** | **str** | The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: \&quot;http://example.com/some/info?color&#x3D;red\&quot;. | [optional] 
**response_size** | **str** | The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. | [optional] 
**server_ip** | **str** | The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: \&quot;192.168.1.1\&quot;, \&quot;10.0.0.1:80\&quot;, \&quot;FE80::0202:B3FF:FE1E:8329\&quot;. | [optional] 
**status** | **int** | The response code indicating the status of response. Examples: 200, 404. | [optional] 
**user_agent** | **str** | The user agent sent by the client. Example: \&quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)\&quot;. | [optional] 

## Example

```python
from openapi_client.models.http_request import HttpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRequest from a JSON string
http_request_instance = HttpRequest.from_json(json)
# print the JSON string representation of the object
print(HttpRequest.to_json())

# convert the object into a dict
http_request_dict = http_request_instance.to_dict()
# create an instance of HttpRequest from a dict
http_request_from_dict = HttpRequest.from_dict(http_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


