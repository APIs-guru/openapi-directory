# GoogleCloudAiplatformV1SchemaTextPromptDatasetMetadata

The metadata of Datasets that contain Text Prompt data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidate_count** | **str** | Number of candidates. | [optional] 
**gcs_uri** | **str** | The Google Cloud Storage URI that stores the prompt data. | [optional] 
**grounding_config** | [**GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig**](GoogleCloudAiplatformV1SchemaPredictParamsGroundingConfig.md) |  | [optional] 
**max_output_tokens** | **str** | Value of the maximum number of tokens generated set when the dataset was saved. | [optional] 
**note** | **str** | User-created prompt note. Note size limit is 2KB. | [optional] 
**prompt_type** | **str** | Type of the prompt dataset. | [optional] 
**stop_sequences** | **List[str]** | Customized stop sequences. | [optional] 
**temperature** | **float** | Temperature value used for sampling set when the dataset was saved. This value is used to tune the degree of randomness. | [optional] 
**text** | **str** | The content of the prompt dataset. | [optional] 
**top_k** | **str** | Top K value set when the dataset was saved. This value determines how many candidates with highest probability from the vocab would be selected for each decoding step. | [optional] 
**top_p** | **float** | Top P value set when the dataset was saved. Given topK tokens for decoding, top candidates will be selected until the sum of their probabilities is topP. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_text_prompt_dataset_metadata import GoogleCloudAiplatformV1SchemaTextPromptDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTextPromptDatasetMetadata from a JSON string
google_cloud_aiplatform_v1_schema_text_prompt_dataset_metadata_instance = GoogleCloudAiplatformV1SchemaTextPromptDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTextPromptDatasetMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_text_prompt_dataset_metadata_dict = google_cloud_aiplatform_v1_schema_text_prompt_dataset_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTextPromptDatasetMetadata from a dict
google_cloud_aiplatform_v1_schema_text_prompt_dataset_metadata_from_dict = GoogleCloudAiplatformV1SchemaTextPromptDatasetMetadata.from_dict(google_cloud_aiplatform_v1_schema_text_prompt_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


