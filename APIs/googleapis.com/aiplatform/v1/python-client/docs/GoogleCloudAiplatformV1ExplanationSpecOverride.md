# GoogleCloudAiplatformV1ExplanationSpecOverride

The ExplanationSpec entries that can be overridden at online explanation time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**examples_override** | [**GoogleCloudAiplatformV1ExamplesOverride**](GoogleCloudAiplatformV1ExamplesOverride.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1ExplanationMetadataOverride**](GoogleCloudAiplatformV1ExplanationMetadataOverride.md) |  | [optional] 
**parameters** | [**GoogleCloudAiplatformV1ExplanationParameters**](GoogleCloudAiplatformV1ExplanationParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_explanation_spec_override import GoogleCloudAiplatformV1ExplanationSpecOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExplanationSpecOverride from a JSON string
google_cloud_aiplatform_v1_explanation_spec_override_instance = GoogleCloudAiplatformV1ExplanationSpecOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExplanationSpecOverride.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_explanation_spec_override_dict = google_cloud_aiplatform_v1_explanation_spec_override_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExplanationSpecOverride from a dict
google_cloud_aiplatform_v1_explanation_spec_override_from_dict = GoogleCloudAiplatformV1ExplanationSpecOverride.from_dict(google_cloud_aiplatform_v1_explanation_spec_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


