# GoogleCloudPolicysimulatorV1Replay

A resource describing a `Replay`, or simulation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**GoogleCloudPolicysimulatorV1ReplayConfig**](GoogleCloudPolicysimulatorV1ReplayConfig.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the &#x60;Replay&#x60;, which has the following format: &#x60;{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}&#x60;, where &#x60;{resource-id}&#x60; is the ID of the project, folder, or organization that owns the Replay. Example: &#x60;projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36&#x60; | [optional] [readonly] 
**results_summary** | [**GoogleCloudPolicysimulatorV1ReplayResultsSummary**](GoogleCloudPolicysimulatorV1ReplayResultsSummary.md) |  | [optional] 
**state** | **str** | Output only. The current state of the &#x60;Replay&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1_replay import GoogleCloudPolicysimulatorV1Replay

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1Replay from a JSON string
google_cloud_policysimulator_v1_replay_instance = GoogleCloudPolicysimulatorV1Replay.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1Replay.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1_replay_dict = google_cloud_policysimulator_v1_replay_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1Replay from a dict
google_cloud_policysimulator_v1_replay_from_dict = GoogleCloudPolicysimulatorV1Replay.from_dict(google_cloud_policysimulator_v1_replay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


