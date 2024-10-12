# GoogleCloudMlV1TrainingOutput

Represents results of a training job. Output only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in_algorithm_output** | [**GoogleCloudMlV1BuiltInAlgorithmOutput**](GoogleCloudMlV1BuiltInAlgorithmOutput.md) |  | [optional] 
**completed_trial_count** | **str** | The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs. | [optional] 
**consumed_ml_units** | **float** | The amount of ML units consumed by the job. | [optional] 
**hyperparameter_metric_tag** | **str** | The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [&#x60;HyperparameterSpec.hyperparameterMetricTag&#x60;](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs. | [optional] 
**is_built_in_algorithm_job** | **bool** | Whether this job is a built-in Algorithm job. | [optional] 
**is_hyperparameter_tuning_job** | **bool** | Whether this job is a hyperparameter tuning job. | [optional] 
**trials** | [**List[GoogleCloudMlV1HyperparameterOutput]**](GoogleCloudMlV1HyperparameterOutput.md) | Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs. | [optional] 
**web_access_uris** | **Dict[str, str]** | Output only. URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if training_input.enable_web_access is &#x60;true&#x60;. The keys are names of each node in the training job; for example, &#x60;master-replica-0&#x60; for the master node, &#x60;worker-replica-0&#x60; for the first worker, and &#x60;ps-replica-0&#x60; for the first parameter server. The values are the URIs for each node&#39;s interactive shell. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_training_output import GoogleCloudMlV1TrainingOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1TrainingOutput from a JSON string
google_cloud_ml_v1_training_output_instance = GoogleCloudMlV1TrainingOutput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1TrainingOutput.to_json())

# convert the object into a dict
google_cloud_ml_v1_training_output_dict = google_cloud_ml_v1_training_output_instance.to_dict()
# create an instance of GoogleCloudMlV1TrainingOutput from a dict
google_cloud_ml_v1_training_output_from_dict = GoogleCloudMlV1TrainingOutput.from_dict(google_cloud_ml_v1_training_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


