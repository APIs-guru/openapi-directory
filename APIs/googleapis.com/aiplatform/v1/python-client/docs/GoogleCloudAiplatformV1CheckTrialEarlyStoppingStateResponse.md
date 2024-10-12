# GoogleCloudAiplatformV1CheckTrialEarlyStoppingStateResponse

Response message for VizierService.CheckTrialEarlyStoppingState.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**should_stop** | **bool** | True if the Trial should stop. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_check_trial_early_stopping_state_response import GoogleCloudAiplatformV1CheckTrialEarlyStoppingStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CheckTrialEarlyStoppingStateResponse from a JSON string
google_cloud_aiplatform_v1_check_trial_early_stopping_state_response_instance = GoogleCloudAiplatformV1CheckTrialEarlyStoppingStateResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CheckTrialEarlyStoppingStateResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_check_trial_early_stopping_state_response_dict = google_cloud_aiplatform_v1_check_trial_early_stopping_state_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CheckTrialEarlyStoppingStateResponse from a dict
google_cloud_aiplatform_v1_check_trial_early_stopping_state_response_from_dict = GoogleCloudAiplatformV1CheckTrialEarlyStoppingStateResponse.from_dict(google_cloud_aiplatform_v1_check_trial_early_stopping_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


