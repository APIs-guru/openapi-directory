# GoogleCloudMlV1HyperparameterOutput

Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_metrics** | [**List[GoogleCloudMlV1HyperparameterOutputHyperparameterMetric]**](GoogleCloudMlV1HyperparameterOutputHyperparameterMetric.md) | All recorded object metrics for this trial. This field is not currently populated. | [optional] 
**built_in_algorithm_output** | [**GoogleCloudMlV1BuiltInAlgorithmOutput**](GoogleCloudMlV1BuiltInAlgorithmOutput.md) |  | [optional] 
**end_time** | **str** | Output only. End time for the trial. | [optional] 
**final_metric** | [**GoogleCloudMlV1HyperparameterOutputHyperparameterMetric**](GoogleCloudMlV1HyperparameterOutputHyperparameterMetric.md) |  | [optional] 
**hyperparameters** | **Dict[str, str]** | The hyperparameters given to this trial. | [optional] 
**is_trial_stopped_early** | **bool** | True if the trial is stopped early. | [optional] 
**start_time** | **str** | Output only. Start time for the trial. | [optional] 
**state** | **str** | Output only. The detailed state of the trial. | [optional] 
**trial_id** | **str** | The trial id for these results. | [optional] 
**web_access_uris** | **Dict[str, str]** | URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if this trial is part of a hyperparameter tuning job and the job&#39;s training_input.enable_web_access is &#x60;true&#x60;. The keys are names of each node in the training job; for example, &#x60;master-replica-0&#x60; for the master node, &#x60;worker-replica-0&#x60; for the first worker, and &#x60;ps-replica-0&#x60; for the first parameter server. The values are the URIs for each node&#39;s interactive shell. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_hyperparameter_output import GoogleCloudMlV1HyperparameterOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1HyperparameterOutput from a JSON string
google_cloud_ml_v1_hyperparameter_output_instance = GoogleCloudMlV1HyperparameterOutput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1HyperparameterOutput.to_json())

# convert the object into a dict
google_cloud_ml_v1_hyperparameter_output_dict = google_cloud_ml_v1_hyperparameter_output_instance.to_dict()
# create an instance of GoogleCloudMlV1HyperparameterOutput from a dict
google_cloud_ml_v1_hyperparameter_output_from_dict = GoogleCloudMlV1HyperparameterOutput.from_dict(google_cloud_ml_v1_hyperparameter_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


