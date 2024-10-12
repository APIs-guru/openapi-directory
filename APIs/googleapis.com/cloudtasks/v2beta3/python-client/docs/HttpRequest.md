# HttpRequest

HTTP request. The task will be pushed to the worker as an HTTP request. If the worker or the redirected worker acknowledges the task by returning a successful HTTP response code ([`200` - `299`]), the task will be removed from the queue. If any other HTTP response code is returned or no response is received, the task will be retried according to the following: * User-specified throttling: retry configuration, rate limits, and the queue's state. * System throttling: To prevent the worker from overloading, Cloud Tasks may temporarily reduce the queue's effective rate. User-specified settings will not be changed. System throttling happens because: * Cloud Tasks backs off on all errors. Normally the backoff specified in rate limits will be used. But if the worker returns `429` (Too Many Requests), `503` (Service Unavailable), or the rate of errors is high, Cloud Tasks will use a higher backoff rate. The retry specified in the `Retry-After` HTTP response header is considered. * To prevent traffic spikes and to smooth sudden increases in traffic, dispatches ramp up slowly when the queue is newly created or idle and if large numbers of tasks suddenly become available to dispatch (due to spikes in create task rates, the queue being unpaused, or many tasks that are scheduled at the same time).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **bytearray** | HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a task with an incompatible HttpMethod. | [optional] 
**headers** | **Dict[str, str]** | HTTP request headers. This map contains the header field names and values. Headers can be set when the task is created. These headers represent a subset of the headers that will accompany the task&#39;s HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is: * Any header that is prefixed with \&quot;X-CloudTasks-\&quot; will be treated as service header. Service headers define properties of the task and are predefined in CloudTask. * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be computed by Cloud Tasks. * User-Agent: This will be set to &#x60;\&quot;Google-Cloud-Tasks\&quot;&#x60;. * &#x60;X-Google-*&#x60;: Google use only. * &#x60;X-AppEngine-*&#x60;: Google use only. &#x60;Content-Type&#x60; won&#39;t be set by Cloud Tasks. You can explicitly set &#x60;Content-Type&#x60; to a media type when the task is created. For example, &#x60;Content-Type&#x60; can be set to &#x60;\&quot;application/octet-stream\&quot;&#x60; or &#x60;\&quot;application/json\&quot;&#x60;. Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values. The size of the headers must be less than 80KB. | [optional] 
**http_method** | **str** | The HTTP method to use for the request. The default is POST. | [optional] 
**oauth_token** | [**OAuthToken**](OAuthToken.md) |  | [optional] 
**oidc_token** | [**OidcToken**](OidcToken.md) |  | [optional] 
**url** | **str** | Required. The full url path that the request will be sent to. This string must begin with either \&quot;http://\&quot; or \&quot;https://\&quot;. Some examples are: &#x60;http://acme.com&#x60; and &#x60;https://acme.com/sales:8080&#x60;. Cloud Tasks will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding. The &#x60;Location&#x60; header response from a redirect response [&#x60;300&#x60; - &#x60;399&#x60;] may be followed. The redirect is not counted as a separate attempt. | [optional] 

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


