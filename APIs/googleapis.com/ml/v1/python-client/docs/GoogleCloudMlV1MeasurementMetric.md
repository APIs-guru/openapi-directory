# GoogleCloudMlV1MeasurementMetric

A message representing a metric in the measurement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | **str** | Required. Metric name. | [optional] 
**value** | **float** | Required. The value for this metric. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_measurement_metric import GoogleCloudMlV1MeasurementMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1MeasurementMetric from a JSON string
google_cloud_ml_v1_measurement_metric_instance = GoogleCloudMlV1MeasurementMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1MeasurementMetric.to_json())

# convert the object into a dict
google_cloud_ml_v1_measurement_metric_dict = google_cloud_ml_v1_measurement_metric_instance.to_dict()
# create an instance of GoogleCloudMlV1MeasurementMetric from a dict
google_cloud_ml_v1_measurement_metric_from_dict = GoogleCloudMlV1MeasurementMetric.from_dict(google_cloud_ml_v1_measurement_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


