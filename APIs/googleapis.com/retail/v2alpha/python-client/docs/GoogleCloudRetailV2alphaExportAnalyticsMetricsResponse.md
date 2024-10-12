# GoogleCloudRetailV2alphaExportAnalyticsMetricsResponse

Response of the ExportAnalyticsMetricsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the request. | [optional] 
**errors_config** | [**GoogleCloudRetailV2alphaExportErrorsConfig**](GoogleCloudRetailV2alphaExportErrorsConfig.md) |  | [optional] 
**output_result** | [**GoogleCloudRetailV2alphaOutputResult**](GoogleCloudRetailV2alphaOutputResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_export_analytics_metrics_response import GoogleCloudRetailV2alphaExportAnalyticsMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaExportAnalyticsMetricsResponse from a JSON string
google_cloud_retail_v2alpha_export_analytics_metrics_response_instance = GoogleCloudRetailV2alphaExportAnalyticsMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaExportAnalyticsMetricsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_export_analytics_metrics_response_dict = google_cloud_retail_v2alpha_export_analytics_metrics_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaExportAnalyticsMetricsResponse from a dict
google_cloud_retail_v2alpha_export_analytics_metrics_response_from_dict = GoogleCloudRetailV2alphaExportAnalyticsMetricsResponse.from_dict(google_cloud_retail_v2alpha_export_analytics_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


