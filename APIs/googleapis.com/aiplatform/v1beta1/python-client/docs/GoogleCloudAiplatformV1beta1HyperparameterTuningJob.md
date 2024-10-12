# GoogleCloudAiplatformV1beta1HyperparameterTuningJob

Represents a HyperparameterTuningJob. A HyperparameterTuningJob has a Study specification and multiple CustomJobs with identical CustomJob specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the HyperparameterTuningJob was created. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the HyperparameterTuningJob. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**end_time** | **str** | Output only. Time when the HyperparameterTuningJob entered any of the following states: &#x60;JOB_STATE_SUCCEEDED&#x60;, &#x60;JOB_STATE_FAILED&#x60;, &#x60;JOB_STATE_CANCELLED&#x60;. | [optional] [readonly] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize HyperparameterTuningJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**max_failed_trial_count** | **int** | The number of failed Trials that need to be seen before failing the HyperparameterTuningJob. If set to 0, Vertex AI decides how many Trials must fail before the whole job fails. | [optional] 
**max_trial_count** | **int** | Required. The desired total number of Trials. | [optional] 
**name** | **str** | Output only. Resource name of the HyperparameterTuningJob. | [optional] [readonly] 
**parallel_trial_count** | **int** | Required. The desired number of Trials to run in parallel. | [optional] 
**start_time** | **str** | Output only. Time when the HyperparameterTuningJob for the first time entered the &#x60;JOB_STATE_RUNNING&#x60; state. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of the job. | [optional] [readonly] 
**study_spec** | [**GoogleCloudAiplatformV1beta1StudySpec**](GoogleCloudAiplatformV1beta1StudySpec.md) |  | [optional] 
**trial_job_spec** | [**GoogleCloudAiplatformV1beta1CustomJobSpec**](GoogleCloudAiplatformV1beta1CustomJobSpec.md) |  | [optional] 
**trials** | [**List[GoogleCloudAiplatformV1beta1Trial]**](GoogleCloudAiplatformV1beta1Trial.md) | Output only. Trials of the HyperparameterTuningJob. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the HyperparameterTuningJob was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_hyperparameter_tuning_job import GoogleCloudAiplatformV1beta1HyperparameterTuningJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1HyperparameterTuningJob from a JSON string
google_cloud_aiplatform_v1beta1_hyperparameter_tuning_job_instance = GoogleCloudAiplatformV1beta1HyperparameterTuningJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1HyperparameterTuningJob.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_hyperparameter_tuning_job_dict = google_cloud_aiplatform_v1beta1_hyperparameter_tuning_job_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1HyperparameterTuningJob from a dict
google_cloud_aiplatform_v1beta1_hyperparameter_tuning_job_from_dict = GoogleCloudAiplatformV1beta1HyperparameterTuningJob.from_dict(google_cloud_aiplatform_v1beta1_hyperparameter_tuning_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


