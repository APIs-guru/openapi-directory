# GoogleCloudApigeeV1SecurityReportQueryMetric

Metric of the Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_function** | **str** | Aggregation function: avg, min, max, or sum. | [optional] 
**alias** | **str** | Alias for the metric. Alias will be used to replace metric name in query results. | [optional] 
**name** | **str** | Required. Metric name. | [optional] 
**operator** | **str** | One of &#x60;+&#x60;, &#x60;-&#x60;, &#x60;/&#x60;, &#x60;%&#x60;, &#x60;*&#x60;. | [optional] 
**value** | **str** | Operand value should be provided when operator is set. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_report_query_metric import GoogleCloudApigeeV1SecurityReportQueryMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityReportQueryMetric from a JSON string
google_cloud_apigee_v1_security_report_query_metric_instance = GoogleCloudApigeeV1SecurityReportQueryMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityReportQueryMetric.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_report_query_metric_dict = google_cloud_apigee_v1_security_report_query_metric_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityReportQueryMetric from a dict
google_cloud_apigee_v1_security_report_query_metric_from_dict = GoogleCloudApigeeV1SecurityReportQueryMetric.from_dict(google_cloud_apigee_v1_security_report_query_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


