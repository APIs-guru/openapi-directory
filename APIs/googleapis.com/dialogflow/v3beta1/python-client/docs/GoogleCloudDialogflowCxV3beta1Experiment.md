# GoogleCloudDialogflowCxV3beta1Experiment

Represents an experiment in an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Creation time of this experiment. | [optional] 
**definition** | [**GoogleCloudDialogflowCxV3beta1ExperimentDefinition**](GoogleCloudDialogflowCxV3beta1ExperimentDefinition.md) |  | [optional] 
**description** | **str** | The human-readable description of the experiment. | [optional] 
**display_name** | **str** | Required. The human-readable name of the experiment (unique in an environment). Limit of 64 characters. | [optional] 
**end_time** | **str** | End time of this experiment. | [optional] 
**experiment_length** | **str** | Maximum number of days to run the experiment. If auto-rollout is not enabled, default value and maximum will be 30 days. If auto-rollout is enabled, default value and maximum will be 6 days. | [optional] 
**last_update_time** | **str** | Last update time of this experiment. | [optional] 
**name** | **str** | The name of the experiment. Format: projects//locations//agents//environments//experiments/.. | [optional] 
**result** | [**GoogleCloudDialogflowCxV3beta1ExperimentResult**](GoogleCloudDialogflowCxV3beta1ExperimentResult.md) |  | [optional] 
**rollout_config** | [**GoogleCloudDialogflowCxV3beta1RolloutConfig**](GoogleCloudDialogflowCxV3beta1RolloutConfig.md) |  | [optional] 
**rollout_failure_reason** | **str** | The reason why rollout has failed. Should only be set when state is ROLLOUT_FAILED. | [optional] 
**rollout_state** | [**GoogleCloudDialogflowCxV3beta1RolloutState**](GoogleCloudDialogflowCxV3beta1RolloutState.md) |  | [optional] 
**start_time** | **str** | Start time of this experiment. | [optional] 
**state** | **str** | The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT-&gt;RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT-&gt;DONE or RUNNING-&gt;DONE. | [optional] 
**variants_history** | [**List[GoogleCloudDialogflowCxV3beta1VariantsHistory]**](GoogleCloudDialogflowCxV3beta1VariantsHistory.md) | The history of updates to the experiment variants. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_experiment import GoogleCloudDialogflowCxV3beta1Experiment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Experiment from a JSON string
google_cloud_dialogflow_cx_v3beta1_experiment_instance = GoogleCloudDialogflowCxV3beta1Experiment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Experiment.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_experiment_dict = google_cloud_dialogflow_cx_v3beta1_experiment_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Experiment from a dict
google_cloud_dialogflow_cx_v3beta1_experiment_from_dict = GoogleCloudDialogflowCxV3beta1Experiment.from_dict(google_cloud_dialogflow_cx_v3beta1_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


