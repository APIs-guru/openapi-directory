# GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry

Single source entry for the grounding checking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enterprise_datastore** | **str** | The uri of the Vertex AI Search data source. Deprecated. Use vertex_ai_search_datastore instead. | [optional] 
**inline_context** | **str** | The grounding text passed inline with the Predict API. It can support up to 1 million bytes. | [optional] 
**type** | **str** | The type of the grounding checking source. | [optional] 
**vertex_ai_search_datastore** | **str** | The uri of the Vertex AI Search data source. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_params_grounding_config_source_entry import GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry from a JSON string
google_cloud_aiplatform_v1_schema_predict_params_grounding_config_source_entry_instance = GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_params_grounding_config_source_entry_dict = google_cloud_aiplatform_v1_schema_predict_params_grounding_config_source_entry_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry from a dict
google_cloud_aiplatform_v1_schema_predict_params_grounding_config_source_entry_from_dict = GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfigSourceEntry.from_dict(google_cloud_aiplatform_v1_schema_predict_params_grounding_config_source_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


