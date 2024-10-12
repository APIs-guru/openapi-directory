# GooglePlayDeveloperReportingV1alpha1Anomaly

Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[GooglePlayDeveloperReportingV1alpha1DimensionValue]**](GooglePlayDeveloperReportingV1alpha1DimensionValue.md) | Combination of dimensions in which the anomaly was detected. | [optional] 
**metric** | [**GooglePlayDeveloperReportingV1alpha1MetricValue**](GooglePlayDeveloperReportingV1alpha1MetricValue.md) |  | [optional] 
**metric_set** | **str** | Metric set resource where the anomaly was detected. | [optional] 
**name** | **str** | Identifier. Name of the anomaly. Format: apps/{app}/anomalies/{anomaly} | [optional] 
**timeline_spec** | [**GooglePlayDeveloperReportingV1alpha1TimelineSpec**](GooglePlayDeveloperReportingV1alpha1TimelineSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_anomaly import GooglePlayDeveloperReportingV1alpha1Anomaly

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1Anomaly from a JSON string
google_play_developer_reporting_v1alpha1_anomaly_instance = GooglePlayDeveloperReportingV1alpha1Anomaly.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1Anomaly.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_anomaly_dict = google_play_developer_reporting_v1alpha1_anomaly_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1Anomaly from a dict
google_play_developer_reporting_v1alpha1_anomaly_from_dict = GooglePlayDeveloperReportingV1alpha1Anomaly.from_dict(google_play_developer_reporting_v1alpha1_anomaly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


