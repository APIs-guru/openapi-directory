# GoogleCloudPolicysimulatorV1betaListReplayResultsResponse

Response message for Simulator.ListReplayResults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages. | [optional] 
**replay_results** | [**List[GoogleCloudPolicysimulatorV1betaReplayResult]**](GoogleCloudPolicysimulatorV1betaReplayResult.md) | The results of running a Replay. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1beta_list_replay_results_response import GoogleCloudPolicysimulatorV1betaListReplayResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1betaListReplayResultsResponse from a JSON string
google_cloud_policysimulator_v1beta_list_replay_results_response_instance = GoogleCloudPolicysimulatorV1betaListReplayResultsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1betaListReplayResultsResponse.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1beta_list_replay_results_response_dict = google_cloud_policysimulator_v1beta_list_replay_results_response_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1betaListReplayResultsResponse from a dict
google_cloud_policysimulator_v1beta_list_replay_results_response_from_dict = GoogleCloudPolicysimulatorV1betaListReplayResultsResponse.from_dict(google_cloud_policysimulator_v1beta_list_replay_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


