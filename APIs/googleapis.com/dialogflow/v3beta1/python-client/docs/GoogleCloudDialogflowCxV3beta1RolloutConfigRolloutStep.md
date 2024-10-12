# GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep

A single rollout step with specified traffic allocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the rollout step; | [optional] 
**min_duration** | **str** | The minimum time that this step should last. Should be longer than 1 hour. If not set, the default minimum duration for each step will be 1 hour. | [optional] 
**traffic_percent** | **int** | The percentage of traffic allocated to the flow version of this rollout step. (0%, 100%]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_rollout_config_rollout_step import GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep from a JSON string
google_cloud_dialogflow_cx_v3beta1_rollout_config_rollout_step_instance = GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_rollout_config_rollout_step_dict = google_cloud_dialogflow_cx_v3beta1_rollout_config_rollout_step_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep from a dict
google_cloud_dialogflow_cx_v3beta1_rollout_config_rollout_step_from_dict = GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep.from_dict(google_cloud_dialogflow_cx_v3beta1_rollout_config_rollout_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


