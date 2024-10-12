# GoogleCloudDiscoveryengineLoggingHttpRequestContext

HTTP request data that is related to a reported error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response_status_code** | **int** | The HTTP response status code for the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_logging_http_request_context import GoogleCloudDiscoveryengineLoggingHttpRequestContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineLoggingHttpRequestContext from a JSON string
google_cloud_discoveryengine_logging_http_request_context_instance = GoogleCloudDiscoveryengineLoggingHttpRequestContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineLoggingHttpRequestContext.to_json())

# convert the object into a dict
google_cloud_discoveryengine_logging_http_request_context_dict = google_cloud_discoveryengine_logging_http_request_context_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineLoggingHttpRequestContext from a dict
google_cloud_discoveryengine_logging_http_request_context_from_dict = GoogleCloudDiscoveryengineLoggingHttpRequestContext.from_dict(google_cloud_discoveryengine_logging_http_request_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


