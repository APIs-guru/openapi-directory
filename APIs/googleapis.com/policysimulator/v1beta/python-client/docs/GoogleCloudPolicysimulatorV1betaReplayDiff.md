# GoogleCloudPolicysimulatorV1betaReplayDiff

The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a principal's access could change if the proposed policies were applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_diff** | [**GoogleCloudPolicysimulatorV1betaAccessStateDiff**](GoogleCloudPolicysimulatorV1betaAccessStateDiff.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1beta_replay_diff import GoogleCloudPolicysimulatorV1betaReplayDiff

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1betaReplayDiff from a JSON string
google_cloud_policysimulator_v1beta_replay_diff_instance = GoogleCloudPolicysimulatorV1betaReplayDiff.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1betaReplayDiff.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1beta_replay_diff_dict = google_cloud_policysimulator_v1beta_replay_diff_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1betaReplayDiff from a dict
google_cloud_policysimulator_v1beta_replay_diff_from_dict = GoogleCloudPolicysimulatorV1betaReplayDiff.from_dict(google_cloud_policysimulator_v1beta_replay_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


