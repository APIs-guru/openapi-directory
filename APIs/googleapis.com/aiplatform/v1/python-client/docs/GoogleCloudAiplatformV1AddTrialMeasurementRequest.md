# GoogleCloudAiplatformV1AddTrialMeasurementRequest

Request message for VizierService.AddTrialMeasurement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measurement** | [**GoogleCloudAiplatformV1Measurement**](GoogleCloudAiplatformV1Measurement.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_add_trial_measurement_request import GoogleCloudAiplatformV1AddTrialMeasurementRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1AddTrialMeasurementRequest from a JSON string
google_cloud_aiplatform_v1_add_trial_measurement_request_instance = GoogleCloudAiplatformV1AddTrialMeasurementRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1AddTrialMeasurementRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_add_trial_measurement_request_dict = google_cloud_aiplatform_v1_add_trial_measurement_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1AddTrialMeasurementRequest from a dict
google_cloud_aiplatform_v1_add_trial_measurement_request_from_dict = GoogleCloudAiplatformV1AddTrialMeasurementRequest.from_dict(google_cloud_aiplatform_v1_add_trial_measurement_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


