# GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig

The configuration (stopping conditions) for automated stopping of a Study. Conditions include trial budgets, time budgets, and convergence detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_duration_no_progress** | **str** | If the objective value has not improved for this much time, stop the study. WARNING: Effective only for single-objective studies. | [optional] 
**max_num_trials** | **int** | If there are more than this many trials, stop the study. | [optional] 
**max_num_trials_no_progress** | **int** | If the objective value has not improved for this many consecutive trials, stop the study. WARNING: Effective only for single-objective studies. | [optional] 
**maximum_runtime_constraint** | [**GoogleCloudAiplatformV1beta1StudyTimeConstraint**](GoogleCloudAiplatformV1beta1StudyTimeConstraint.md) |  | [optional] 
**min_num_trials** | **int** | If there are fewer than this many COMPLETED trials, do not stop the study. | [optional] 
**minimum_runtime_constraint** | [**GoogleCloudAiplatformV1beta1StudyTimeConstraint**](GoogleCloudAiplatformV1beta1StudyTimeConstraint.md) |  | [optional] 
**should_stop_asap** | **bool** | If true, a Study enters STOPPING_ASAP whenever it would normally enters STOPPING state. The bottom line is: set to true if you want to interrupt on-going evaluations of Trials as soon as the study stopping condition is met. (Please see Study.State documentation for the source of truth). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_study_stopping_config import GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_study_stopping_config_instance = GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_study_stopping_config_dict = google_cloud_aiplatform_v1beta1_study_spec_study_stopping_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig from a dict
google_cloud_aiplatform_v1beta1_study_spec_study_stopping_config_from_dict = GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig.from_dict(google_cloud_aiplatform_v1beta1_study_spec_study_stopping_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


