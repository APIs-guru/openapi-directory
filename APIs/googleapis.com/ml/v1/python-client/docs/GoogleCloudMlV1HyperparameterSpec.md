# GoogleCloudMlV1HyperparameterSpec

Represents a set of hyperparameters to optimize.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Optional. The search algorithm specified for the hyperparameter tuning job. Uses the default AI Platform hyperparameter tuning algorithm if unspecified. | [optional] 
**enable_trial_early_stopping** | **bool** | Optional. Indicates if the hyperparameter tuning job enables auto trial early stopping. | [optional] 
**goal** | **str** | Required. The type of goal to use for tuning. Available types are &#x60;MAXIMIZE&#x60; and &#x60;MINIMIZE&#x60;. Defaults to &#x60;MAXIMIZE&#x60;. | [optional] 
**hyperparameter_metric_tag** | **str** | Optional. The TensorFlow summary tag name to use for optimizing trials. For current versions of TensorFlow, this tag name should exactly match what is shown in TensorBoard, including all scopes. For versions of TensorFlow prior to 0.12, this should be only the tag passed to tf.Summary. By default, \&quot;training/hptuning/metric\&quot; will be used. | [optional] 
**max_failed_trials** | **int** | Optional. The number of failed trials that need to be seen before failing the hyperparameter tuning job. You can specify this field to override the default failing criteria for AI Platform hyperparameter tuning jobs. Defaults to zero, which means the service decides when a hyperparameter job should fail. | [optional] 
**max_parallel_trials** | **int** | Optional. The number of training trials to run concurrently. You can reduce the time it takes to perform hyperparameter tuning by adding trials in parallel. However, each trail only benefits from the information gained in completed trials. That means that a trial does not get access to the results of trials running at the same time, which could reduce the quality of the overall optimization. Each trial will use the same scale tier and machine types. Defaults to one. | [optional] 
**max_trials** | **int** | Optional. How many training trials should be attempted to optimize the specified hyperparameters. Defaults to one. | [optional] 
**params** | [**List[GoogleCloudMlV1ParameterSpec]**](GoogleCloudMlV1ParameterSpec.md) | Required. The set of parameters to tune. | [optional] 
**resume_previous_job_id** | **str** | Optional. The prior hyperparameter tuning job id that users hope to continue with. The job id will be used to find the corresponding vizier study guid and resume the study. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_hyperparameter_spec import GoogleCloudMlV1HyperparameterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1HyperparameterSpec from a JSON string
google_cloud_ml_v1_hyperparameter_spec_instance = GoogleCloudMlV1HyperparameterSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1HyperparameterSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_hyperparameter_spec_dict = google_cloud_ml_v1_hyperparameter_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1HyperparameterSpec from a dict
google_cloud_ml_v1_hyperparameter_spec_from_dict = GoogleCloudMlV1HyperparameterSpec.from_dict(google_cloud_ml_v1_hyperparameter_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


