# GoogleCloudAiplatformV1ListOptimalTrialsResponse

Response message for VizierService.ListOptimalTrials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**optimal_trials** | [**List[GoogleCloudAiplatformV1Trial]**](GoogleCloudAiplatformV1Trial.md) | The pareto-optimal Trials for multiple objective Study or the optimal trial for single objective Study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_optimal_trials_response import GoogleCloudAiplatformV1ListOptimalTrialsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListOptimalTrialsResponse from a JSON string
google_cloud_aiplatform_v1_list_optimal_trials_response_instance = GoogleCloudAiplatformV1ListOptimalTrialsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListOptimalTrialsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_optimal_trials_response_dict = google_cloud_aiplatform_v1_list_optimal_trials_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListOptimalTrialsResponse from a dict
google_cloud_aiplatform_v1_list_optimal_trials_response_from_dict = GoogleCloudAiplatformV1ListOptimalTrialsResponse.from_dict(google_cloud_aiplatform_v1_list_optimal_trials_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


