# HttpTarget

Http target. The job will be pushed to the job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **bytearray** | HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a job with an incompatible HttpMethod. | [optional] 
**headers** | **Dict[str, str]** | HTTP request headers. This map contains the header field names and values. The user can specify HTTP request headers to send with the job&#39;s HTTP request. Repeated headers are not supported, but a header value can contain commas. The following headers represent a subset of the headers that accompany the job&#39;s HTTP request. Some HTTP request headers are ignored or replaced. A partial list of headers that are ignored or replaced is below: * Host: This will be computed by Cloud Scheduler and derived from uri. * &#x60;Content-Length&#x60;: This will be computed by Cloud Scheduler. * &#x60;User-Agent&#x60;: This will be set to &#x60;\&quot;Google-Cloud-Scheduler\&quot;&#x60;. * &#x60;X-Google-*&#x60;: Google internal use only. * &#x60;X-AppEngine-*&#x60;: Google internal use only. * &#x60;X-CloudScheduler&#x60;: This header will be set to true. * &#x60;X-CloudScheduler-JobName&#x60;: This header will contain the job name. * &#x60;X-CloudScheduler-ScheduleTime&#x60;: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339. If the job has a body and the following headers are not set by the user, Cloud Scheduler sets default values: * &#x60;Content-Type&#x60;: This will be set to &#x60;\&quot;application/octet-stream\&quot;&#x60;. You can override this default by explicitly setting &#x60;Content-Type&#x60; to a particular media type when creating the job. For example, you can set &#x60;Content-Type&#x60; to &#x60;\&quot;application/json\&quot;&#x60;. The total size of headers must be less than 80KB. | [optional] 
**http_method** | **str** | Which HTTP method to use for the request. | [optional] 
**oauth_token** | [**OAuthToken**](OAuthToken.md) |  | [optional] 
**oidc_token** | [**OidcToken**](OidcToken.md) |  | [optional] 
**uri** | **str** | Required. The full URI path that the request will be sent to. This string must begin with either \&quot;http://\&quot; or \&quot;https://\&quot;. Some examples of valid values for uri are: &#x60;http://acme.com&#x60; and &#x60;https://acme.com/sales:8080&#x60;. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding. | [optional] 

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


