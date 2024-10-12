# GoogleCloudMlV1CompleteTrialRequest

The request message for the CompleteTrial service method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**final_measurement** | [**GoogleCloudMlV1Measurement**](GoogleCloudMlV1Measurement.md) |  | [optional] 
**infeasible_reason** | **str** | Optional. A human readable reason why the trial was infeasible. This should only be provided if &#x60;trial_infeasible&#x60; is true. | [optional] 
**trial_infeasible** | **bool** | Optional. True if the trial cannot be run with the given Parameter, and final_measurement will be ignored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_complete_trial_request import GoogleCloudMlV1CompleteTrialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1CompleteTrialRequest from a JSON string
google_cloud_ml_v1_complete_trial_request_instance = GoogleCloudMlV1CompleteTrialRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1CompleteTrialRequest.to_json())

# convert the object into a dict
google_cloud_ml_v1_complete_trial_request_dict = google_cloud_ml_v1_complete_trial_request_instance.to_dict()
# create an instance of GoogleCloudMlV1CompleteTrialRequest from a dict
google_cloud_ml_v1_complete_trial_request_from_dict = GoogleCloudMlV1CompleteTrialRequest.from_dict(google_cloud_ml_v1_complete_trial_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


