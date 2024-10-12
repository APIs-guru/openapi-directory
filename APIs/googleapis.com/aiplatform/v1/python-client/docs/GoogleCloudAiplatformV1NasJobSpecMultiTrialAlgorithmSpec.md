# GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpec

The spec of multi-trial Neural Architecture Search (NAS).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | [**GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpecMetricSpec**](GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpecMetricSpec.md) |  | [optional] 
**multi_trial_algorithm** | **str** | The multi-trial Neural Architecture Search (NAS) algorithm type. Defaults to &#x60;REINFORCEMENT_LEARNING&#x60;. | [optional] 
**search_trial_spec** | [**GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec**](GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpecSearchTrialSpec.md) |  | [optional] 
**train_trial_spec** | [**GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec**](GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpecTrainTrialSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_nas_job_spec_multi_trial_algorithm_spec import GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpec from a JSON string
google_cloud_aiplatform_v1_nas_job_spec_multi_trial_algorithm_spec_instance = GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_nas_job_spec_multi_trial_algorithm_spec_dict = google_cloud_aiplatform_v1_nas_job_spec_multi_trial_algorithm_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpec from a dict
google_cloud_aiplatform_v1_nas_job_spec_multi_trial_algorithm_spec_from_dict = GoogleCloudAiplatformV1NasJobSpecMultiTrialAlgorithmSpec.from_dict(google_cloud_aiplatform_v1_nas_job_spec_multi_trial_algorithm_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


