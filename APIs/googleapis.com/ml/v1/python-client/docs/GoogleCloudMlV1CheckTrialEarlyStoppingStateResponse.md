# GoogleCloudMlV1CheckTrialEarlyStoppingStateResponse

The message will be placed in the response field of a completed google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time at which operation processing completed. | [optional] 
**should_stop** | **bool** | True if the Trial should stop. | [optional] 
**start_time** | **str** | The time at which the operation was started. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_check_trial_early_stopping_state_response import GoogleCloudMlV1CheckTrialEarlyStoppingStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1CheckTrialEarlyStoppingStateResponse from a JSON string
google_cloud_ml_v1_check_trial_early_stopping_state_response_instance = GoogleCloudMlV1CheckTrialEarlyStoppingStateResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1CheckTrialEarlyStoppingStateResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_check_trial_early_stopping_state_response_dict = google_cloud_ml_v1_check_trial_early_stopping_state_response_instance.to_dict()
# create an instance of GoogleCloudMlV1CheckTrialEarlyStoppingStateResponse from a dict
google_cloud_ml_v1_check_trial_early_stopping_state_response_from_dict = GoogleCloudMlV1CheckTrialEarlyStoppingStateResponse.from_dict(google_cloud_ml_v1_check_trial_early_stopping_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


