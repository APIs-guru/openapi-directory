# GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput

The output of a multi-trial Neural Architecture Search (NAS) jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_trials** | [**List[GoogleCloudAiplatformV1beta1NasTrial]**](GoogleCloudAiplatformV1beta1NasTrial.md) | Output only. List of NasTrials that were started as part of search stage. | [optional] [readonly] 
**train_trials** | [**List[GoogleCloudAiplatformV1beta1NasTrial]**](GoogleCloudAiplatformV1beta1NasTrial.md) | Output only. List of NasTrials that were started as part of train stage. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nas_job_output_multi_trial_job_output import GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput from a JSON string
google_cloud_aiplatform_v1beta1_nas_job_output_multi_trial_job_output_instance = GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nas_job_output_multi_trial_job_output_dict = google_cloud_aiplatform_v1beta1_nas_job_output_multi_trial_job_output_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput from a dict
google_cloud_aiplatform_v1beta1_nas_job_output_multi_trial_job_output_from_dict = GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput.from_dict(google_cloud_aiplatform_v1beta1_nas_job_output_multi_trial_job_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


