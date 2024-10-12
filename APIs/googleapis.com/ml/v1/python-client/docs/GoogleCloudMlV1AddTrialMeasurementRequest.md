# GoogleCloudMlV1AddTrialMeasurementRequest

The request message for the AddTrialMeasurement service method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measurement** | [**GoogleCloudMlV1Measurement**](GoogleCloudMlV1Measurement.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_add_trial_measurement_request import GoogleCloudMlV1AddTrialMeasurementRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1AddTrialMeasurementRequest from a JSON string
google_cloud_ml_v1_add_trial_measurement_request_instance = GoogleCloudMlV1AddTrialMeasurementRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1AddTrialMeasurementRequest.to_json())

# convert the object into a dict
google_cloud_ml_v1_add_trial_measurement_request_dict = google_cloud_ml_v1_add_trial_measurement_request_instance.to_dict()
# create an instance of GoogleCloudMlV1AddTrialMeasurementRequest from a dict
google_cloud_ml_v1_add_trial_measurement_request_from_dict = GoogleCloudMlV1AddTrialMeasurementRequest.from_dict(google_cloud_ml_v1_add_trial_measurement_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


