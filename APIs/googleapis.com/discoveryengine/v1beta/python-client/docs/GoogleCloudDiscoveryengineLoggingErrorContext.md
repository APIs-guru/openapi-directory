# GoogleCloudDiscoveryengineLoggingErrorContext

A description of the context in which an error occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_request** | [**GoogleCloudDiscoveryengineLoggingHttpRequestContext**](GoogleCloudDiscoveryengineLoggingHttpRequestContext.md) |  | [optional] 
**report_location** | [**GoogleCloudDiscoveryengineLoggingSourceLocation**](GoogleCloudDiscoveryengineLoggingSourceLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_logging_error_context import GoogleCloudDiscoveryengineLoggingErrorContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineLoggingErrorContext from a JSON string
google_cloud_discoveryengine_logging_error_context_instance = GoogleCloudDiscoveryengineLoggingErrorContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineLoggingErrorContext.to_json())

# convert the object into a dict
google_cloud_discoveryengine_logging_error_context_dict = google_cloud_discoveryengine_logging_error_context_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineLoggingErrorContext from a dict
google_cloud_discoveryengine_logging_error_context_from_dict = GoogleCloudDiscoveryengineLoggingErrorContext.from_dict(google_cloud_discoveryengine_logging_error_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


