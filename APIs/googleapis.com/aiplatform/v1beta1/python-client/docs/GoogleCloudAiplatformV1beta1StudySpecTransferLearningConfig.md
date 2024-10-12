# GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig

This contains flag for manually disabling transfer learning for a study. The names of prior studies being used for transfer learning (if any) are also listed here.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_transfer_learning** | **bool** | Flag to to manually prevent vizier from using transfer learning on a new study. Otherwise, vizier will automatically determine whether or not to use transfer learning. | [optional] 
**prior_study_names** | **List[str]** | Output only. Names of previously completed studies | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_transfer_learning_config import GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_transfer_learning_config_instance = GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_transfer_learning_config_dict = google_cloud_aiplatform_v1beta1_study_spec_transfer_learning_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig from a dict
google_cloud_aiplatform_v1beta1_study_spec_transfer_learning_config_from_dict = GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig.from_dict(google_cloud_aiplatform_v1beta1_study_spec_transfer_learning_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


