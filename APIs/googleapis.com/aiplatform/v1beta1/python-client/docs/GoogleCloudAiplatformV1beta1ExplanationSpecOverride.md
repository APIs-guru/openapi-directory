# GoogleCloudAiplatformV1beta1ExplanationSpecOverride

The ExplanationSpec entries that can be overridden at online explanation time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**examples_override** | [**GoogleCloudAiplatformV1beta1ExamplesOverride**](GoogleCloudAiplatformV1beta1ExamplesOverride.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1beta1ExplanationMetadataOverride**](GoogleCloudAiplatformV1beta1ExplanationMetadataOverride.md) |  | [optional] 
**parameters** | [**GoogleCloudAiplatformV1beta1ExplanationParameters**](GoogleCloudAiplatformV1beta1ExplanationParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_explanation_spec_override import GoogleCloudAiplatformV1beta1ExplanationSpecOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExplanationSpecOverride from a JSON string
google_cloud_aiplatform_v1beta1_explanation_spec_override_instance = GoogleCloudAiplatformV1beta1ExplanationSpecOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExplanationSpecOverride.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_explanation_spec_override_dict = google_cloud_aiplatform_v1beta1_explanation_spec_override_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExplanationSpecOverride from a dict
google_cloud_aiplatform_v1beta1_explanation_spec_override_from_dict = GoogleCloudAiplatformV1beta1ExplanationSpecOverride.from_dict(google_cloud_aiplatform_v1beta1_explanation_spec_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


