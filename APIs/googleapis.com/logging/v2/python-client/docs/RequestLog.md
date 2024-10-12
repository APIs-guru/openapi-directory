# RequestLog

Complete log information about a single HTTP request to an App Engine application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_release** | **str** | App Engine release version. | [optional] 
**app_id** | **str** | Application that handled this request. | [optional] 
**cost** | **float** | An indication of the relative cost of serving this request. | [optional] 
**end_time** | **str** | Time when the request finished. | [optional] 
**finished** | **bool** | Whether this request is finished or active. | [optional] 
**first** | **bool** | Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them. | [optional] 
**host** | **str** | Internet host and port number of the resource being requested. | [optional] 
**http_version** | **str** | HTTP version of request. Example: \&quot;HTTP/1.1\&quot;. | [optional] 
**instance_id** | **str** | An identifier for the instance that handled the request. | [optional] 
**instance_index** | **int** | If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1. | [optional] 
**ip** | **str** | Origin IP address. | [optional] 
**latency** | **str** | Latency of the request. | [optional] 
**line** | [**List[LogLine]**](LogLine.md) | A list of log lines emitted by the application while serving this request. | [optional] 
**mega_cycles** | **str** | Number of CPU megacycles used to process request. | [optional] 
**method** | **str** | Request method. Example: \&quot;GET\&quot;, \&quot;HEAD\&quot;, \&quot;PUT\&quot;, \&quot;POST\&quot;, \&quot;DELETE\&quot;. | [optional] 
**module_id** | **str** | Module of the application that handled this request. | [optional] 
**nickname** | **str** | The logged-in user who made the request.Most likely, this is the part of the user&#39;s email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21. | [optional] 
**pending_time** | **str** | Time this request spent in the pending request queue. | [optional] 
**referrer** | **str** | Referrer URL of request. | [optional] 
**request_id** | **str** | Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier. | [optional] 
**resource** | **str** | Contains the path and query portion of the URL that was requested. For example, if the URL was \&quot;http://example.com/app?name&#x3D;val\&quot;, the resource would be \&quot;/app?name&#x3D;val\&quot;. The fragment identifier, which is identified by the # character, is not included. | [optional] 
**response_size** | **str** | Size in bytes sent back to client by request. | [optional] 
**source_reference** | [**List[SourceReference]**](SourceReference.md) | Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories. | [optional] 
**span_id** | **str** | Stackdriver Trace span identifier for this request. | [optional] 
**start_time** | **str** | Time when the request started. | [optional] 
**status** | **int** | HTTP response status code. Example: 200, 404. | [optional] 
**task_name** | **str** | Task name of the request, in the case of an offline request. | [optional] 
**task_queue_name** | **str** | Queue name of the request, in the case of an offline request. | [optional] 
**trace_id** | **str** | Stackdriver Trace identifier for this request. | [optional] 
**trace_sampled** | **bool** | If true, the value in the &#39;trace_id&#39; field was sampled for storage in a trace backend. | [optional] 
**url_map_entry** | **str** | File or class that handled the request. | [optional] 
**user_agent** | **str** | User agent that made the request. | [optional] 
**version_id** | **str** | Version of the application that handled this request. | [optional] 
**was_loading_request** | **bool** | Whether this was a loading request for the instance. | [optional] 

## Example

```python
from openapi_client.models.request_log import RequestLog

# TODO update the JSON string below
json = "{}"
# create an instance of RequestLog from a JSON string
request_log_instance = RequestLog.from_json(json)
# print the JSON string representation of the object
print(RequestLog.to_json())

# convert the object into a dict
request_log_dict = request_log_instance.to_dict()
# create an instance of RequestLog from a dict
request_log_from_dict = RequestLog.from_dict(request_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


