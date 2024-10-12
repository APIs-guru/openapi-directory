# HttpTarget

HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_overrides** | [**List[HeaderOverride]**](HeaderOverride.md) | HTTP target headers. This map contains the header field names and values. Headers will be set when running the CreateTask and/or BufferTask. These headers represent a subset of the headers that will be configured for the task&#39;s HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is: * Several predefined headers, prefixed with \&quot;X-CloudTasks-\&quot;, can be used to define properties of the task. * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be computed by Cloud Tasks. &#x60;Content-Type&#x60; won&#39;t be set by Cloud Tasks. You can explicitly set &#x60;Content-Type&#x60; to a media type when the task is created. For example,&#x60;Content-Type&#x60; can be set to &#x60;\&quot;application/octet-stream\&quot;&#x60; or &#x60;\&quot;application/json\&quot;&#x60;. The default value is set to &#x60;\&quot;application/json\&quot;&#x60;. * User-Agent: This will be set to &#x60;\&quot;Google-Cloud-Tasks\&quot;&#x60;. Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values. The size of the headers must be less than 80KB. Queue-level headers to override headers of all the tasks in the queue. | [optional] 
**http_method** | **str** | The HTTP method to use for the request. When specified, it overrides HttpRequest for the task. Note that if the value is set to HttpMethod the HttpRequest of the task will be ignored at execution time. | [optional] 
**oauth_token** | [**OAuthToken**](OAuthToken.md) |  | [optional] 
**oidc_token** | [**OidcToken**](OidcToken.md) |  | [optional] 
**uri_override** | [**UriOverride**](UriOverride.md) |  | [optional] 

## Example

```python
from openapi_client.models.http_target import HttpTarget

# TODO update the JSON string below
json = "{}"
# create an instance of HttpTarget from a JSON string
http_target_instance = HttpTarget.from_json(json)
# print the JSON string representation of the object
print(HttpTarget.to_json())

# convert the object into a dict
http_target_dict = http_target_instance.to_dict()
# create an instance of HttpTarget from a dict
http_target_from_dict = HttpTarget.from_dict(http_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


