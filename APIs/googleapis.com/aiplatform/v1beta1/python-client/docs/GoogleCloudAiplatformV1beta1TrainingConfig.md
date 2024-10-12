# GoogleCloudAiplatformV1beta1TrainingConfig

CMLE training config. For every active learning labeling iteration, system will train a machine learning model on CMLE. The trained model will be used by data sampling algorithm to select DataItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeout_training_milli_hours** | **str** | The timeout hours for the CMLE training job, expressed in milli hours i.e. 1,000 value in this field means 1 hour. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_training_config import GoogleCloudAiplatformV1beta1TrainingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TrainingConfig from a JSON string
google_cloud_aiplatform_v1beta1_training_config_instance = GoogleCloudAiplatformV1beta1TrainingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TrainingConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_training_config_dict = google_cloud_aiplatform_v1beta1_training_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TrainingConfig from a dict
google_cloud_aiplatform_v1beta1_training_config_from_dict = GoogleCloudAiplatformV1beta1TrainingConfig.from_dict(google_cloud_aiplatform_v1beta1_training_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


