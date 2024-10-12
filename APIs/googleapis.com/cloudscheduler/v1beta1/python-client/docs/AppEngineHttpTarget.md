# AppEngineHttpTarget

App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_routing** | [**AppEngineRouting**](AppEngineRouting.md) |  | [optional] 
**body** | **bytearray** | Body. HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It will result in invalid argument error to set a body on a job with an incompatible HttpMethod. | [optional] 
**headers** | **Dict[str, str]** | HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. Cloud Scheduler sets some headers to default values: * &#x60;User-Agent&#x60;: By default, this header is &#x60;\&quot;AppEngine-Google; (+http://code.google.com/appengine)\&quot;&#x60;. This header can be modified, but Cloud Scheduler will append &#x60;\&quot;AppEngine-Google; (+http://code.google.com/appengine)\&quot;&#x60; to the modified &#x60;User-Agent&#x60;. * &#x60;X-CloudScheduler&#x60;: This header will be set to true. * &#x60;X-CloudScheduler-JobName&#x60;: This header will contain the job name. * &#x60;X-CloudScheduler-ScheduleTime&#x60;: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339. If the job has a body and the following headers are not set by the user, Cloud Scheduler sets default values: * &#x60;Content-Type&#x60;: This will be set to &#x60;\&quot;application/octet-stream\&quot;&#x60;. You can override this default by explicitly setting &#x60;Content-Type&#x60; to a particular media type when creating the job. For example, you can set &#x60;Content-Type&#x60; to &#x60;\&quot;application/json\&quot;&#x60;. The headers below are output only. They cannot be set or overridden: * &#x60;Content-Length&#x60;: This is computed by Cloud Scheduler. * &#x60;X-Google-*&#x60;: For Google internal use only. * &#x60;X-AppEngine-*&#x60;: For Google internal use only. In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. | [optional] 
**http_method** | **str** | The HTTP method to use for the request. PATCH and OPTIONS are not permitted. | [optional] 
**relative_uri** | **str** | The relative URI. The relative URL must begin with \&quot;/\&quot; and must be a valid HTTP relative URL. It can contain a path, query string arguments, and &#x60;#&#x60; fragments. If the relative URL is empty, then the root path \&quot;/\&quot; will be used. No spaces are allowed, and the maximum length allowed is 2083 characters. | [optional] 

## Example

```python
from openapi_client.models.app_engine_http_target import AppEngineHttpTarget

# TODO update the JSON string below
json = "{}"
# create an instance of AppEngineHttpTarget from a JSON string
app_engine_http_target_instance = AppEngineHttpTarget.from_json(json)
# print the JSON string representation of the object
print(AppEngineHttpTarget.to_json())

# convert the object into a dict
app_engine_http_target_dict = app_engine_http_target_instance.to_dict()
# create an instance of AppEngineHttpTarget from a dict
app_engine_http_target_from_dict = AppEngineHttpTarget.from_dict(app_engine_http_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


