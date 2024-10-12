# GoogleCloudAiplatformV1Measurement

A message representing a Measurement of a Trial. A Measurement contains the Metrics got by executing a Trial using suggested hyperparameter values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elapsed_duration** | **str** | Output only. Time that the Trial has been running at the point of this Measurement. | [optional] [readonly] 
**metrics** | [**List[GoogleCloudAiplatformV1MeasurementMetric]**](GoogleCloudAiplatformV1MeasurementMetric.md) | Output only. A list of metrics got by evaluating the objective functions using suggested Parameter values. | [optional] [readonly] 
**step_count** | **str** | Output only. The number of steps the machine learning model has been trained for. Must be non-negative. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_measurement import GoogleCloudAiplatformV1Measurement

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Measurement from a JSON string
google_cloud_aiplatform_v1_measurement_instance = GoogleCloudAiplatformV1Measurement.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Measurement.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_measurement_dict = google_cloud_aiplatform_v1_measurement_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Measurement from a dict
google_cloud_aiplatform_v1_measurement_from_dict = GoogleCloudAiplatformV1Measurement.from_dict(google_cloud_aiplatform_v1_measurement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


