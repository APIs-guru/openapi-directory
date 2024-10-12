# GoogleCloudRetailLoggingErrorContext

A description of the context in which an error occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_request** | [**GoogleCloudRetailLoggingHttpRequestContext**](GoogleCloudRetailLoggingHttpRequestContext.md) |  | [optional] 
**report_location** | [**GoogleCloudRetailLoggingSourceLocation**](GoogleCloudRetailLoggingSourceLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_logging_error_context import GoogleCloudRetailLoggingErrorContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailLoggingErrorContext from a JSON string
google_cloud_retail_logging_error_context_instance = GoogleCloudRetailLoggingErrorContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailLoggingErrorContext.to_json())

# convert the object into a dict
google_cloud_retail_logging_error_context_dict = google_cloud_retail_logging_error_context_instance.to_dict()
# create an instance of GoogleCloudRetailLoggingErrorContext from a dict
google_cloud_retail_logging_error_context_from_dict = GoogleCloudRetailLoggingErrorContext.from_dict(google_cloud_retail_logging_error_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


