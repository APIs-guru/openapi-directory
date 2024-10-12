# ReportedErrorEvent

An error event which is reported to the Error Reporting system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**ErrorContext**](ErrorContext.md) |  | [optional] 
**event_time** | **str** | Optional. Time when the event occurred. If not provided, the time when the event was received by the Error Reporting system is used. If provided, the time must not exceed the [logs retention period](https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, or be more than 24 hours in the future. If an invalid time is provided, then an error is returned. | [optional] 
**message** | **str** | Required. The error message. If no &#x60;context.reportLocation&#x60; is provided, the message must contain a header (typically consisting of the exception type name and an error message) and an exception stack trace in one of the supported programming languages and formats. Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go. Supported stack trace formats are: * **Java**: Must be the return value of [&#x60;Throwable.printStackTrace()&#x60;](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html#printStackTrace%28%29). * **Python**: Must be the return value of [&#x60;traceback.format_exc()&#x60;](https://docs.python.org/2/library/traceback.html#traceback.format_exc). * **JavaScript**: Must be the value of [&#x60;error.stack&#x60;](https://github.com/v8/v8/wiki/Stack-Trace-API) as returned by V8. * **Ruby**: Must contain frames returned by [&#x60;Exception.backtrace&#x60;](https://ruby-doc.org/core-2.2.0/Exception.html#method-i-backtrace). * **C#**: Must be the return value of [&#x60;Exception.ToString()&#x60;](https://msdn.microsoft.com/en-us/library/system.exception.tostring.aspx). * **PHP**: Must be prefixed with &#x60;\&quot;PHP (Notice|Parse error|Fatal error|Warning): \&quot;&#x60; and contain the result of [&#x60;(string)$exception&#x60;](https://php.net/manual/en/exception.tostring.php). * **Go**: Must be the return value of [&#x60;runtime.Stack()&#x60;](https://golang.org/pkg/runtime/debug/#Stack). | [optional] 
**service_context** | [**ServiceContext**](ServiceContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.reported_error_event import ReportedErrorEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ReportedErrorEvent from a JSON string
reported_error_event_instance = ReportedErrorEvent.from_json(json)
# print the JSON string representation of the object
print(ReportedErrorEvent.to_json())

# convert the object into a dict
reported_error_event_dict = reported_error_event_instance.to_dict()
# create an instance of ReportedErrorEvent from a dict
reported_error_event_from_dict = ReportedErrorEvent.from_dict(reported_error_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


