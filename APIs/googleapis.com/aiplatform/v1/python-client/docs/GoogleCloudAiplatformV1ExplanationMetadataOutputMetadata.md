# GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata

Metadata of the prediction output to be explained.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name_mapping_key** | **str** | Specify a field name in the prediction to look for the display name. Use this if the prediction contains the display names for the outputs. The display names in the prediction must have the same shape of the outputs, so that it can be located by Attribution.output_index for a specific output. | [optional] 
**index_display_name_mapping** | **object** | Static mapping between the index and display name. Use this if the outputs are a deterministic n-dimensional array, e.g. a list of scores of all the classes in a pre-defined order for a multi-classification Model. It&#39;s not feasible if the outputs are non-deterministic, e.g. the Model produces top-k classes or sort the outputs by their values. The shape of the value must be an n-dimensional array of strings. The number of dimensions must match that of the outputs to be explained. The Attribution.output_display_name is populated by locating in the mapping with Attribution.output_index. | [optional] 
**output_tensor_name** | **str** | Name of the output tensor. Required and is only applicable to Vertex AI provided images for Tensorflow. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_explanation_metadata_output_metadata import GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata from a JSON string
google_cloud_aiplatform_v1_explanation_metadata_output_metadata_instance = GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_explanation_metadata_output_metadata_dict = google_cloud_aiplatform_v1_explanation_metadata_output_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata from a dict
google_cloud_aiplatform_v1_explanation_metadata_output_metadata_from_dict = GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata.from_dict(google_cloud_aiplatform_v1_explanation_metadata_output_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


