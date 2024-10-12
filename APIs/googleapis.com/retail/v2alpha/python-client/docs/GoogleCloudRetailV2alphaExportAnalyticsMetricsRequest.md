# GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest

Request message for the `ExportAnalyticsMetrics` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | A filtering expression to specify restrictions on returned metrics. The expression is a sequence of terms. Each term applies a restriction to the returned metrics. Use this expression to restrict results to a specific time range. Currently we expect only one types of fields: * &#x60;timestamp&#x60;: This can be specified twice, once with a less than operator and once with a greater than operator. The &#x60;timestamp&#x60; restriction should result in one, contiguous, valid, &#x60;timestamp&#x60; range. Some examples of valid filters expressions: * Example 1: &#x60;timestamp &gt; \&quot;2012-04-23T18:25:43.511Z\&quot; timestamp &lt; \&quot;2012-04-23T18:30:43.511Z\&quot;&#x60; * Example 2: &#x60;timestamp &gt; \&quot;2012-04-23T18:25:43.511Z\&quot;&#x60; | [optional] 
**output_config** | [**GoogleCloudRetailV2alphaOutputConfig**](GoogleCloudRetailV2alphaOutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_export_analytics_metrics_request import GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest from a JSON string
google_cloud_retail_v2alpha_export_analytics_metrics_request_instance = GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_export_analytics_metrics_request_dict = google_cloud_retail_v2alpha_export_analytics_metrics_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest from a dict
google_cloud_retail_v2alpha_export_analytics_metrics_request_from_dict = GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest.from_dict(google_cloud_retail_v2alpha_export_analytics_metrics_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


