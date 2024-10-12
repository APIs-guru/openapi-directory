# GoogleCloudAiplatformV1ExplanationMetadataOverride

The ExplanationMetadata entries that can be overridden at online explanation time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**Dict[str, GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride]**](GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride.md) | Required. Overrides the input metadata of the features. The key is the name of the feature to be overridden. The keys specified here must exist in the input metadata to be overridden. If a feature is not specified here, the corresponding feature&#39;s input metadata is not overridden. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_explanation_metadata_override import GoogleCloudAiplatformV1ExplanationMetadataOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExplanationMetadataOverride from a JSON string
google_cloud_aiplatform_v1_explanation_metadata_override_instance = GoogleCloudAiplatformV1ExplanationMetadataOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExplanationMetadataOverride.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_explanation_metadata_override_dict = google_cloud_aiplatform_v1_explanation_metadata_override_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExplanationMetadataOverride from a dict
google_cloud_aiplatform_v1_explanation_metadata_override_from_dict = GoogleCloudAiplatformV1ExplanationMetadataOverride.from_dict(google_cloud_aiplatform_v1_explanation_metadata_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


