# GoogleCloudPolicysimulatorV1ListReplayResultsResponse

Response message for Simulator.ListReplayResults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages. | [optional] 
**replay_results** | [**List[GoogleCloudPolicysimulatorV1ReplayResult]**](GoogleCloudPolicysimulatorV1ReplayResult.md) | The results of running a Replay. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1_list_replay_results_response import GoogleCloudPolicysimulatorV1ListReplayResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1ListReplayResultsResponse from a JSON string
google_cloud_policysimulator_v1_list_replay_results_response_instance = GoogleCloudPolicysimulatorV1ListReplayResultsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1ListReplayResultsResponse.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1_list_replay_results_response_dict = google_cloud_policysimulator_v1_list_replay_results_response_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1ListReplayResultsResponse from a dict
google_cloud_policysimulator_v1_list_replay_results_response_from_dict = GoogleCloudPolicysimulatorV1ListReplayResultsResponse.from_dict(google_cloud_policysimulator_v1_list_replay_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


