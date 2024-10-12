# GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec

Represent spec for search trials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_failed_trial_count** | **int** | The number of failed trials that need to be seen before failing the NasJob. If set to 0, Vertex AI decides how many trials must fail before the whole job fails. | [optional] 
**max_parallel_trial_count** | **int** | Required. The maximum number of trials to run in parallel. | [optional] 
**max_trial_count** | **int** | Required. The maximum number of Neural Architecture Search (NAS) trials to run. | [optional] 
**search_trial_job_spec** | [**GoogleCloudAiplatformV1beta1CustomJobSpec**](GoogleCloudAiplatformV1beta1CustomJobSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_search_trial_spec import GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec from a JSON string
google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_search_trial_spec_instance = GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_search_trial_spec_dict = google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_search_trial_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec from a dict
google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_search_trial_spec_from_dict = GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec.from_dict(google_cloud_aiplatform_v1beta1_nas_job_spec_multi_trial_algorithm_spec_search_trial_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


