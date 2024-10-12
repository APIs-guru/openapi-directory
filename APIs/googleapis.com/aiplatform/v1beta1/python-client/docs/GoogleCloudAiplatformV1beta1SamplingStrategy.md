# GoogleCloudAiplatformV1beta1SamplingStrategy

Sampling Strategy for logging, can be for both training and prediction dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**random_sample_config** | [**GoogleCloudAiplatformV1beta1SamplingStrategyRandomSampleConfig**](GoogleCloudAiplatformV1beta1SamplingStrategyRandomSampleConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_sampling_strategy import GoogleCloudAiplatformV1beta1SamplingStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SamplingStrategy from a JSON string
google_cloud_aiplatform_v1beta1_sampling_strategy_instance = GoogleCloudAiplatformV1beta1SamplingStrategy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SamplingStrategy.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_sampling_strategy_dict = google_cloud_aiplatform_v1beta1_sampling_strategy_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SamplingStrategy from a dict
google_cloud_aiplatform_v1beta1_sampling_strategy_from_dict = GoogleCloudAiplatformV1beta1SamplingStrategy.from_dict(google_cloud_aiplatform_v1beta1_sampling_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


