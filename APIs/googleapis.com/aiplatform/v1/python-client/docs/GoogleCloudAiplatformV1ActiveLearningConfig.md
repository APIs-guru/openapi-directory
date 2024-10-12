# GoogleCloudAiplatformV1ActiveLearningConfig

Parameters that configure the active learning pipeline. Active learning will label the data incrementally by several iterations. For every iteration, it will select a batch of data based on the sampling strategy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_data_item_count** | **str** | Max number of human labeled DataItems. | [optional] 
**max_data_item_percentage** | **int** | Max percent of total DataItems for human labeling. | [optional] 
**sample_config** | [**GoogleCloudAiplatformV1SampleConfig**](GoogleCloudAiplatformV1SampleConfig.md) |  | [optional] 
**training_config** | [**GoogleCloudAiplatformV1TrainingConfig**](GoogleCloudAiplatformV1TrainingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_active_learning_config import GoogleCloudAiplatformV1ActiveLearningConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ActiveLearningConfig from a JSON string
google_cloud_aiplatform_v1_active_learning_config_instance = GoogleCloudAiplatformV1ActiveLearningConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ActiveLearningConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_active_learning_config_dict = google_cloud_aiplatform_v1_active_learning_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ActiveLearningConfig from a dict
google_cloud_aiplatform_v1_active_learning_config_from_dict = GoogleCloudAiplatformV1ActiveLearningConfig.from_dict(google_cloud_aiplatform_v1_active_learning_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


