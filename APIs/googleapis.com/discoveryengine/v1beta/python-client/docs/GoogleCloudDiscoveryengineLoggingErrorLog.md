# GoogleCloudDiscoveryengineLoggingErrorLog

An error log which is reported to the Error Reporting system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**GoogleCloudDiscoveryengineLoggingErrorContext**](GoogleCloudDiscoveryengineLoggingErrorContext.md) |  | [optional] 
**import_payload** | [**GoogleCloudDiscoveryengineLoggingImportErrorContext**](GoogleCloudDiscoveryengineLoggingImportErrorContext.md) |  | [optional] 
**message** | **str** | A message describing the error. | [optional] 
**request_payload** | **Dict[str, object]** | The API request payload, represented as a protocol buffer. Most API request types are supported—for example: * &#x60;type.googleapis.com/google.cloud.discoveryengine.v1alpha.DocumentService.CreateDocumentRequest&#x60; * &#x60;type.googleapis.com/google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEventRequest&#x60; | [optional] 
**response_payload** | **Dict[str, object]** | The API response payload, represented as a protocol buffer. This is used to log some \&quot;soft errors\&quot;, where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported, and no PII is included: * &#x60;google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend&#x60; * &#x60;google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEvent&#x60; * &#x60;google.cloud.discoveryengine.v1alpha.UserEventService.CollectUserEvent&#x60; | [optional] 
**service_context** | [**GoogleCloudDiscoveryengineLoggingServiceContext**](GoogleCloudDiscoveryengineLoggingServiceContext.md) |  | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_logging_error_log import GoogleCloudDiscoveryengineLoggingErrorLog

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineLoggingErrorLog from a JSON string
google_cloud_discoveryengine_logging_error_log_instance = GoogleCloudDiscoveryengineLoggingErrorLog.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineLoggingErrorLog.to_json())

# convert the object into a dict
google_cloud_discoveryengine_logging_error_log_dict = google_cloud_discoveryengine_logging_error_log_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineLoggingErrorLog from a dict
google_cloud_discoveryengine_logging_error_log_from_dict = GoogleCloudDiscoveryengineLoggingErrorLog.from_dict(google_cloud_discoveryengine_logging_error_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


