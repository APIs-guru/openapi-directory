# GoogleCloudPolicysimulatorV1ReplayResult

The result of replaying a single access tuple against a simulated state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tuple** | [**GoogleCloudPolicysimulatorV1AccessTuple**](GoogleCloudPolicysimulatorV1AccessTuple.md) |  | [optional] 
**diff** | [**GoogleCloudPolicysimulatorV1ReplayDiff**](GoogleCloudPolicysimulatorV1ReplayDiff.md) |  | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**last_seen_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**name** | **str** | The resource name of the &#x60;ReplayResult&#x60;, in the following format: &#x60;{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}/results/{replay-result-id}&#x60;, where &#x60;{resource-id}&#x60; is the ID of the project, folder, or organization that owns the Replay. Example: &#x60;projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36/results/1234&#x60; | [optional] 
**parent** | **str** | The Replay that the access tuple was included in. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1_replay_result import GoogleCloudPolicysimulatorV1ReplayResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1ReplayResult from a JSON string
google_cloud_policysimulator_v1_replay_result_instance = GoogleCloudPolicysimulatorV1ReplayResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1ReplayResult.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1_replay_result_dict = google_cloud_policysimulator_v1_replay_result_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1ReplayResult from a dict
google_cloud_policysimulator_v1_replay_result_from_dict = GoogleCloudPolicysimulatorV1ReplayResult.from_dict(google_cloud_policysimulator_v1_replay_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


