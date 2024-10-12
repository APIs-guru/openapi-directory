# GoogleCloudDialogflowCxV3beta1RolloutState

State of the auto-rollout process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **str** | Start time of the current step. | [optional] 
**step** | **str** | Display name of the current auto rollout step. | [optional] 
**step_index** | **int** | Index of the current step in the auto rollout steps list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_rollout_state import GoogleCloudDialogflowCxV3beta1RolloutState

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1RolloutState from a JSON string
google_cloud_dialogflow_cx_v3beta1_rollout_state_instance = GoogleCloudDialogflowCxV3beta1RolloutState.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1RolloutState.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_rollout_state_dict = google_cloud_dialogflow_cx_v3beta1_rollout_state_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1RolloutState from a dict
google_cloud_dialogflow_cx_v3beta1_rollout_state_from_dict = GoogleCloudDialogflowCxV3beta1RolloutState.from_dict(google_cloud_dialogflow_cx_v3beta1_rollout_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


