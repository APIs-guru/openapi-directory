# GoogleCloudAiplatformV1beta1SampleConfig

Active learning data sampling config. For every active learning labeling iteration, it will select a batch of data based on the sampling strategy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**following_batch_sample_percentage** | **int** | The percentage of data needed to be labeled in each following batch (except the first batch). | [optional] 
**initial_batch_sample_percentage** | **int** | The percentage of data needed to be labeled in the first batch. | [optional] 
**sample_strategy** | **str** | Field to choose sampling strategy. Sampling strategy will decide which data should be selected for human labeling in every batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_sample_config import GoogleCloudAiplatformV1beta1SampleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SampleConfig from a JSON string
google_cloud_aiplatform_v1beta1_sample_config_instance = GoogleCloudAiplatformV1beta1SampleConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SampleConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_sample_config_dict = google_cloud_aiplatform_v1beta1_sample_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SampleConfig from a dict
google_cloud_aiplatform_v1beta1_sample_config_from_dict = GoogleCloudAiplatformV1beta1SampleConfig.from_dict(google_cloud_aiplatform_v1beta1_sample_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


