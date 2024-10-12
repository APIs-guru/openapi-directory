# GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride

The input metadata entries to be overridden.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_baselines** | **List[object]** | Baseline inputs for this feature. This overrides the &#x60;input_baseline&#x60; field of the ExplanationMetadata.InputMetadata object of the corresponding feature&#39;s input metadata. If it&#39;s not specified, the original baselines are not overridden. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_explanation_metadata_override_input_metadata_override import GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride from a JSON string
google_cloud_aiplatform_v1_explanation_metadata_override_input_metadata_override_instance = GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_explanation_metadata_override_input_metadata_override_dict = google_cloud_aiplatform_v1_explanation_metadata_override_input_metadata_override_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride from a dict
google_cloud_aiplatform_v1_explanation_metadata_override_input_metadata_override_from_dict = GoogleCloudAiplatformV1ExplanationMetadataOverrideInputMetadataOverride.from_dict(google_cloud_aiplatform_v1_explanation_metadata_override_input_metadata_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


