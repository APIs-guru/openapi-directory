# GoogleCloudMlV1ListOptimalTrialsResponse

The response message for the ListOptimalTrials method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trials** | [**List[GoogleCloudMlV1Trial]**](GoogleCloudMlV1Trial.md) | The pareto-optimal trials for multiple objective study or the optimal trial for single objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_list_optimal_trials_response import GoogleCloudMlV1ListOptimalTrialsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ListOptimalTrialsResponse from a JSON string
google_cloud_ml_v1_list_optimal_trials_response_instance = GoogleCloudMlV1ListOptimalTrialsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ListOptimalTrialsResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_list_optimal_trials_response_dict = google_cloud_ml_v1_list_optimal_trials_response_instance.to_dict()
# create an instance of GoogleCloudMlV1ListOptimalTrialsResponse from a dict
google_cloud_ml_v1_list_optimal_trials_response_from_dict = GoogleCloudMlV1ListOptimalTrialsResponse.from_dict(google_cloud_ml_v1_list_optimal_trials_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


