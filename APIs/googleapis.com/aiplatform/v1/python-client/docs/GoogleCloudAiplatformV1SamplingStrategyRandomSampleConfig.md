# GoogleCloudAiplatformV1SamplingStrategyRandomSampleConfig

Requests are randomly selected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sample_rate** | **float** | Sample rate (0, 1] | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_sampling_strategy_random_sample_config import GoogleCloudAiplatformV1SamplingStrategyRandomSampleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SamplingStrategyRandomSampleConfig from a JSON string
google_cloud_aiplatform_v1_sampling_strategy_random_sample_config_instance = GoogleCloudAiplatformV1SamplingStrategyRandomSampleConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SamplingStrategyRandomSampleConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_sampling_strategy_random_sample_config_dict = google_cloud_aiplatform_v1_sampling_strategy_random_sample_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SamplingStrategyRandomSampleConfig from a dict
google_cloud_aiplatform_v1_sampling_strategy_random_sample_config_from_dict = GoogleCloudAiplatformV1SamplingStrategyRandomSampleConfig.from_dict(google_cloud_aiplatform_v1_sampling_strategy_random_sample_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


