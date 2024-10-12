# GoogleCloudAiplatformV1beta1MeasurementMetric

A message representing a metric in the measurement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_id** | **str** | Output only. The ID of the Metric. The Metric should be defined in StudySpec&#39;s Metrics. | [optional] [readonly] 
**value** | **float** | Output only. The value for this metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_measurement_metric import GoogleCloudAiplatformV1beta1MeasurementMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MeasurementMetric from a JSON string
google_cloud_aiplatform_v1beta1_measurement_metric_instance = GoogleCloudAiplatformV1beta1MeasurementMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MeasurementMetric.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_measurement_metric_dict = google_cloud_aiplatform_v1beta1_measurement_metric_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MeasurementMetric from a dict
google_cloud_aiplatform_v1beta1_measurement_metric_from_dict = GoogleCloudAiplatformV1beta1MeasurementMetric.from_dict(google_cloud_aiplatform_v1beta1_measurement_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


