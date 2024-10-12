# GoogleCloudMlV1SuggestTrialsResponse

This message will be placed in the response field of a completed google.longrunning.Operation associated with a SuggestTrials request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time at which operation processing completed. | [optional] 
**start_time** | **str** | The time at which the operation was started. | [optional] 
**study_state** | **str** | The state of the study. | [optional] 
**trials** | [**List[GoogleCloudMlV1Trial]**](GoogleCloudMlV1Trial.md) | A list of trials. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_suggest_trials_response import GoogleCloudMlV1SuggestTrialsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1SuggestTrialsResponse from a JSON string
google_cloud_ml_v1_suggest_trials_response_instance = GoogleCloudMlV1SuggestTrialsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1SuggestTrialsResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_suggest_trials_response_dict = google_cloud_ml_v1_suggest_trials_response_instance.to_dict()
# create an instance of GoogleCloudMlV1SuggestTrialsResponse from a dict
google_cloud_ml_v1_suggest_trials_response_from_dict = GoogleCloudMlV1SuggestTrialsResponse.from_dict(google_cloud_ml_v1_suggest_trials_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


