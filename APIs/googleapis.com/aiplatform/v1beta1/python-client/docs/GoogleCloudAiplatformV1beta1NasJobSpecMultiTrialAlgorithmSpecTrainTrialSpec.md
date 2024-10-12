# GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec

Represent spec for train trials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **int** | Required. Frequency of search trials to start train stage. Top N [TrainTrialSpec.max_parallel_trial_count] search trials will be trained for every M [TrainTrialSpec.frequency] trials searched. | [optional] 
**max_parallel_trial_count** | **int** | Required. The maximum number of trials to run in parallel. | [optional] 
**train_trial_job_spec** | [**GoogleCloudAiplatformV1beta1CustomJobSpec**](GoogleCloudAiplatformV1beta1CustomJobSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_train_trial_spec import GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec from a JSON string
google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_train_trial_spec_instance = GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_train_trial_spec_dict = google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_train_trial_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec from a dict
google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_train_trial_spec_from_dict = GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec.from_dict(google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_train_trial_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


