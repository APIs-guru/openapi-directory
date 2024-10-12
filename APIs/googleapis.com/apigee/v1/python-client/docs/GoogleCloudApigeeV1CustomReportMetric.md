# GoogleCloudApigeeV1CustomReportMetric

This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function** | **str** | aggregate function | [optional] 
**name** | **str** | name of the metric | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_custom_report_metric import GoogleCloudApigeeV1CustomReportMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1CustomReportMetric from a JSON string
google_cloud_apigee_v1_custom_report_metric_instance = GoogleCloudApigeeV1CustomReportMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1CustomReportMetric.to_json())

# convert the object into a dict
google_cloud_apigee_v1_custom_report_metric_dict = google_cloud_apigee_v1_custom_report_metric_instance.to_dict()
# create an instance of GoogleCloudApigeeV1CustomReportMetric from a dict
google_cloud_apigee_v1_custom_report_metric_from_dict = GoogleCloudApigeeV1CustomReportMetric.from_dict(google_cloud_apigee_v1_custom_report_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


