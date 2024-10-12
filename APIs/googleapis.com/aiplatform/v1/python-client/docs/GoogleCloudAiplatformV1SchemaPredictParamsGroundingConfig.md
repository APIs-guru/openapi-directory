# GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig

The configuration for grounding checking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_attribution** | **bool** | If set, skip finding claim attributions (i.e not generate grounding citation). | [optional] 
**sources** | [**List[GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry]**](GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry.md) | The sources for the grounding checking. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_params_grounding_config import GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig from a JSON string
google_cloud_aiplatform_v1_schema_predict_params_grounding_config_instance = GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_params_grounding_config_dict = google_cloud_aiplatform_v1_schema_predict_params_grounding_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig from a dict
google_cloud_aiplatform_v1_schema_predict_params_grounding_config_from_dict = GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig.from_dict(google_cloud_aiplatform_v1_schema_predict_params_grounding_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


