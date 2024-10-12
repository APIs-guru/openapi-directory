# GoogleCloudAiplatformV1ExplanationMetadata

Metadata describing the Model's input and output for explanation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_attributions_schema_uri** | **str** | Points to a YAML file stored on Google Cloud Storage describing the format of the feature attributions. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). AutoML tabular Models always have this field populated by Vertex AI. Note: The URI given on output may be different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access. | [optional] 
**inputs** | [**Dict[str, GoogleCloudAiplatformV1ExplanationMetadataInputMetadata]**](GoogleCloudAiplatformV1ExplanationMetadataInputMetadata.md) | Required. Map from feature names to feature input metadata. Keys are the name of the features. Values are the specification of the feature. An empty InputMetadata is valid. It describes a text feature which has the name specified as the key in ExplanationMetadata.inputs. The baseline of the empty feature is chosen by Vertex AI. For Vertex AI-provided Tensorflow images, the key can be any friendly name of the feature. Once specified, featureAttributions are keyed by this key (if not grouped with another feature). For custom images, the key must match with the key in instance. | [optional] 
**latent_space_source** | **str** | Name of the source to generate embeddings for example based explanations. | [optional] 
**outputs** | [**Dict[str, GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata]**](GoogleCloudAiplatformV1ExplanationMetadataOutputMetadata.md) | Required. Map from output names to output metadata. For Vertex AI-provided Tensorflow images, keys can be any user defined string that consists of any UTF-8 characters. For custom images, keys are the name of the output field in the prediction to be explained. Currently only one key is allowed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_explanation_metadata import GoogleCloudAiplatformV1ExplanationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExplanationMetadata from a JSON string
google_cloud_aiplatform_v1_explanation_metadata_instance = GoogleCloudAiplatformV1ExplanationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExplanationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_explanation_metadata_dict = google_cloud_aiplatform_v1_explanation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExplanationMetadata from a dict
google_cloud_aiplatform_v1_explanation_metadata_from_dict = GoogleCloudAiplatformV1ExplanationMetadata.from_dict(google_cloud_aiplatform_v1_explanation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


