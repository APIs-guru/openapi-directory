# GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadata

Metadata of the input of a feature. Fields other than InputMetadata.input_baselines are applicable only for Models that are using Vertex AI-provided images for Tensorflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dense_shape_tensor_name** | **str** | Specifies the shape of the values of the input if the input is a sparse representation. Refer to Tensorflow documentation for more details: https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor. | [optional] 
**encoded_baselines** | **List[object]** | A list of baselines for the encoded tensor. The shape of each baseline should match the shape of the encoded tensor. If a scalar is provided, Vertex AI broadcasts to the same shape as the encoded tensor. | [optional] 
**encoded_tensor_name** | **str** | Encoded tensor is a transformation of the input tensor. Must be provided if choosing Integrated Gradients attribution or XRAI attribution and the input tensor is not differentiable. An encoded tensor is generated if the input tensor is encoded by a lookup table. | [optional] 
**encoding** | **str** | Defines how the feature is encoded into the input tensor. Defaults to IDENTITY. | [optional] 
**feature_value_domain** | [**GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain**](GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataFeatureValueDomain.md) |  | [optional] 
**group_name** | **str** | Name of the group that the input belongs to. Features with the same group name will be treated as one feature when computing attributions. Features grouped together can have different shapes in value. If provided, there will be one single attribution generated in Attribution.feature_attributions, keyed by the group name. | [optional] 
**index_feature_mapping** | **List[str]** | A list of feature names for each index in the input tensor. Required when the input InputMetadata.encoding is BAG_OF_FEATURES, BAG_OF_FEATURES_SPARSE, INDICATOR. | [optional] 
**indices_tensor_name** | **str** | Specifies the index of the values of the input tensor. Required when the input tensor is a sparse representation. Refer to Tensorflow documentation for more details: https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor. | [optional] 
**input_baselines** | **List[object]** | Baseline inputs for this feature. If no baseline is specified, Vertex AI chooses the baseline for this feature. If multiple baselines are specified, Vertex AI returns the average attributions across them in Attribution.feature_attributions. For Vertex AI-provided Tensorflow images (both 1.x and 2.x), the shape of each baseline must match the shape of the input tensor. If a scalar is provided, we broadcast to the same shape as the input tensor. For custom images, the element of the baselines must be in the same format as the feature&#39;s input in the instance[]. The schema of any single instance may be specified via Endpoint&#39;s DeployedModels&#39; Model&#39;s PredictSchemata&#39;s instance_schema_uri. | [optional] 
**input_tensor_name** | **str** | Name of the input tensor for this feature. Required and is only applicable to Vertex AI-provided images for Tensorflow. | [optional] 
**modality** | **str** | Modality of the feature. Valid values are: numeric, image. Defaults to numeric. | [optional] 
**visualization** | [**GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataVisualization**](GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadataVisualization.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata import GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadata from a JSON string
google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_instance = GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_dict = google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadata from a dict
google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_from_dict = GoogleCloudAiplatformV1beta1ExplanationMetadataInputMetadata.from_dict(google_cloud_aiplatform_v1beta1_explanation_metadata_input_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


