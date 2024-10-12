# GoogleCloudAiplatformV1GenerationConfig

Generation config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidate_count** | **int** | Optional. Number of candidates to generate. | [optional] 
**max_output_tokens** | **int** | Optional. The maximum number of output tokens to generate per message. | [optional] 
**stop_sequences** | **List[str]** | Optional. Stop sequences. | [optional] 
**temperature** | **float** | Optional. Controls the randomness of predictions. | [optional] 
**top_k** | **float** | Optional. If specified, top-k sampling will be used. | [optional] 
**top_p** | **float** | Optional. If specified, nucleus sampling will be used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_generation_config import GoogleCloudAiplatformV1GenerationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1GenerationConfig from a JSON string
google_cloud_aiplatform_v1_generation_config_instance = GoogleCloudAiplatformV1GenerationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1GenerationConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_generation_config_dict = google_cloud_aiplatform_v1_generation_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1GenerationConfig from a dict
google_cloud_aiplatform_v1_generation_config_from_dict = GoogleCloudAiplatformV1GenerationConfig.from_dict(google_cloud_aiplatform_v1_generation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


