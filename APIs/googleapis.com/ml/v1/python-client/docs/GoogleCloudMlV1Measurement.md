# GoogleCloudMlV1Measurement

A message representing a measurement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elapsed_time** | **str** | Output only. Time that the trial has been running at the point of this measurement. | [optional] 
**metrics** | [**List[GoogleCloudMlV1MeasurementMetric]**](GoogleCloudMlV1MeasurementMetric.md) | Provides a list of metrics that act as inputs into the objective function. | [optional] 
**step_count** | **str** | The number of steps a machine learning model has been trained for. Must be non-negative. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_measurement import GoogleCloudMlV1Measurement

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Measurement from a JSON string
google_cloud_ml_v1_measurement_instance = GoogleCloudMlV1Measurement.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Measurement.to_json())

# convert the object into a dict
google_cloud_ml_v1_measurement_dict = google_cloud_ml_v1_measurement_instance.to_dict()
# create an instance of GoogleCloudMlV1Measurement from a dict
google_cloud_ml_v1_measurement_from_dict = GoogleCloudMlV1Measurement.from_dict(google_cloud_ml_v1_measurement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


