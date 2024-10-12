# GoogleCloudAiplatformV1SuggestTrialsResponse

Response message for VizierService.SuggestTrials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time at which operation processing completed. | [optional] 
**start_time** | **str** | The time at which the operation was started. | [optional] 
**study_state** | **str** | The state of the Study. | [optional] 
**trials** | [**List[GoogleCloudAiplatformV1Trial]**](GoogleCloudAiplatformV1Trial.md) | A list of Trials. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_suggest_trials_response import GoogleCloudAiplatformV1SuggestTrialsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SuggestTrialsResponse from a JSON string
google_cloud_aiplatform_v1_suggest_trials_response_instance = GoogleCloudAiplatformV1SuggestTrialsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SuggestTrialsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_suggest_trials_response_dict = google_cloud_aiplatform_v1_suggest_trials_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SuggestTrialsResponse from a dict
google_cloud_aiplatform_v1_suggest_trials_response_from_dict = GoogleCloudAiplatformV1SuggestTrialsResponse.from_dict(google_cloud_aiplatform_v1_suggest_trials_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


