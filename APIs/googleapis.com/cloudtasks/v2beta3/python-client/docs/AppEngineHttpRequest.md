# AppEngineHttpRequest

App Engine HTTP request. The message defines the HTTP request that is sent to an App Engine app when the task is dispatched. Using AppEngineHttpRequest requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform` The task will be delivered to the App Engine app which belongs to the same project as the queue. For more information, see [How Requests are Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and how routing is affected by [dispatch files](https://cloud.google.com/appengine/docs/python/config/dispatchref). Traffic is encrypted during transport and never leaves Google datacenters. Because this traffic is carried over a communication mechanism internal to Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS). The request to the handler, however, will appear to have used the HTTP protocol. The AppEngineRouting used to construct the URL that the task is delivered to can be set at the queue-level or task-level: * If set, app_engine_routing_override is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing. The `url` that the task will be sent to is: * `url =` host `+` relative_uri Tasks can be dispatched to secure app handlers, unsecure app handlers, and URIs restricted with [`login: admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref). Because tasks are not run as any user, they cannot be dispatched to URIs restricted with [`login: required`](https://cloud.google.com/appengine/docs/standard/python/config/appref) Task dispatches also do not follow redirects. The task attempt has succeeded if the app's request handler returns an HTTP response code in the range [`200` - `299`]. The task attempt has failed if the app's handler returns a non-2xx response code or Cloud Tasks does not receive response before the deadline. Failed tasks will be retried according to the retry configuration. `503` (Service Unavailable) is considered an App Engine system error instead of an application error and will cause Cloud Tasks' traffic congestion control to temporarily throttle the queue's dispatches. Unlike other types of task targets, a `429` (Too Many Requests) response from an app handler does not cause traffic congestion control to throttle the queue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_routing** | [**AppEngineRouting**](AppEngineRouting.md) |  | [optional] 
**body** | **bytearray** | HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It is an error to set a body on a task with an incompatible HttpMethod. | [optional] 
**headers** | **Dict[str, str]** | HTTP request headers. This map contains the header field names and values. Headers can be set when the task is created. Repeated headers are not supported but a header value can contain commas. Cloud Tasks sets some headers to default values: * &#x60;User-Agent&#x60;: By default, this header is &#x60;\&quot;AppEngine-Google; (+http://code.google.com/appengine)\&quot;&#x60;. This header can be modified, but Cloud Tasks will append &#x60;\&quot;AppEngine-Google; (+http://code.google.com/appengine)\&quot;&#x60; to the modified &#x60;User-Agent&#x60;. If the task has a body, Cloud Tasks sets the following headers: * &#x60;Content-Type&#x60;: By default, the &#x60;Content-Type&#x60; header is set to &#x60;\&quot;application/octet-stream\&quot;&#x60;. The default can be overridden by explicitly setting &#x60;Content-Type&#x60; to a particular media type when the task is created. For example, &#x60;Content-Type&#x60; can be set to &#x60;\&quot;application/json\&quot;&#x60;. * &#x60;Content-Length&#x60;: This is computed by Cloud Tasks. This value is output only. It cannot be changed. The headers below cannot be set or overridden: * &#x60;Host&#x60; * &#x60;X-Google-*&#x60; * &#x60;X-AppEngine-*&#x60; In addition, Cloud Tasks sets some headers when the task is dispatched, such as headers containing information about the task; see [request headers](https://cloud.google.com/tasks/docs/creating-appengine-handlers#reading_request_headers). These headers are set only when the task is dispatched, so they are not visible when the task is returned in a Cloud Tasks response. Although there is no specific limit for the maximum number of headers or the size, there is a limit on the maximum size of the Task. For more information, see the CreateTask documentation. | [optional] 
**http_method** | **str** | The HTTP method to use for the request. The default is POST. The app&#39;s request handler for the task&#39;s target URL must be able to handle HTTP requests with this http_method, otherwise the task attempt fails with error code 405 (Method Not Allowed). See [Writing a push task request handler](https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler) and the App Engine documentation for your runtime on [How Requests are Handled](https://cloud.google.com/appengine/docs/standard/python3/how-requests-are-handled). | [optional] 
**relative_uri** | **str** | The relative URI. The relative URI must begin with \&quot;/\&quot; and must be a valid HTTP relative URI. It can contain a path and query string arguments. If the relative URI is empty, then the root path \&quot;/\&quot; will be used. No spaces are allowed, and the maximum length allowed is 2083 characters. | [optional] 

## Example

```python
from openapi_client.models.app_engine_http_request import AppEngineHttpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppEngineHttpRequest from a JSON string
app_engine_http_request_instance = AppEngineHttpRequest.from_json(json)
# print the JSON string representation of the object
print(AppEngineHttpRequest.to_json())

# convert the object into a dict
app_engine_http_request_dict = app_engine_http_request_instance.to_dict()
# create an instance of AppEngineHttpRequest from a dict
app_engine_http_request_from_dict = AppEngineHttpRequest.from_dict(app_engine_http_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


