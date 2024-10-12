# GooglePlayDeveloperReportingV1beta1MetricValue

Represents the value of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decimal_value** | [**GoogleTypeDecimal**](GoogleTypeDecimal.md) |  | [optional] 
**decimal_value_confidence_interval** | [**GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval**](GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval.md) |  | [optional] 
**metric** | **str** | Name of the metric. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_metric_value import GooglePlayDeveloperReportingV1beta1MetricValue

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1MetricValue from a JSON string
google_play_developer_reporting_v1beta1_metric_value_instance = GooglePlayDeveloperReportingV1beta1MetricValue.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1MetricValue.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_metric_value_dict = google_play_developer_reporting_v1beta1_metric_value_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1MetricValue from a dict
google_play_developer_reporting_v1beta1_metric_value_from_dict = GooglePlayDeveloperReportingV1beta1MetricValue.from_dict(google_play_developer_reporting_v1beta1_metric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


