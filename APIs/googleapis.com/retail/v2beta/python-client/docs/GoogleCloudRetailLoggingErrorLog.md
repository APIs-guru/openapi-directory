# GoogleCloudRetailLoggingErrorLog

An error log which is reported to the Error Reporting system. This proto a superset of google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**GoogleCloudRetailLoggingErrorContext**](GoogleCloudRetailLoggingErrorContext.md) |  | [optional] 
**import_payload** | [**GoogleCloudRetailLoggingImportErrorContext**](GoogleCloudRetailLoggingImportErrorContext.md) |  | [optional] 
**message** | **str** | A message describing the error. | [optional] 
**request_payload** | **Dict[str, object]** | The API request payload, represented as a protocol buffer. Most API request types are supported. For example: \&quot;type.googleapis.com/google.cloud.retail.v2.ProductService.CreateProductRequest\&quot; \&quot;type.googleapis.com/google.cloud.retail.v2.UserEventService.WriteUserEventRequest\&quot; | [optional] 
**response_payload** | **Dict[str, object]** | The API response payload, represented as a protocol buffer. This is used to log some \&quot;soft errors\&quot;, where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported and no PII is included: \&quot;google.cloud.retail.v2.PredictionService.Predict\&quot; \&quot;google.cloud.retail.v2.UserEventService.WriteUserEvent\&quot; \&quot;google.cloud.retail.v2.UserEventService.CollectUserEvent\&quot; | [optional] 
**service_context** | [**GoogleCloudRetailLoggingServiceContext**](GoogleCloudRetailLoggingServiceContext.md) |  | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_logging_error_log import GoogleCloudRetailLoggingErrorLog

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailLoggingErrorLog from a JSON string
google_cloud_retail_logging_error_log_instance = GoogleCloudRetailLoggingErrorLog.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailLoggingErrorLog.to_json())

# convert the object into a dict
google_cloud_retail_logging_error_log_dict = google_cloud_retail_logging_error_log_instance.to_dict()
# create an instance of GoogleCloudRetailLoggingErrorLog from a dict
google_cloud_retail_logging_error_log_from_dict = GoogleCloudRetailLoggingErrorLog.from_dict(google_cloud_retail_logging_error_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


