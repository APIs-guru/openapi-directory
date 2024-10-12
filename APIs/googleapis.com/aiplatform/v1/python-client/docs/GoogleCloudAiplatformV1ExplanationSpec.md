# GoogleCloudAiplatformV1ExplanationSpec

Specification of Model explanation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**GoogleCloudAiplatformV1ExplanationMetadata**](GoogleCloudAiplatformV1ExplanationMetadata.md) |  | [optional] 
**parameters** | [**GoogleCloudAiplatformV1ExplanationParameters**](GoogleCloudAiplatformV1ExplanationParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_explanation_spec import GoogleCloudAiplatformV1ExplanationSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExplanationSpec from a JSON string
google_cloud_aiplatform_v1_explanation_spec_instance = GoogleCloudAiplatformV1ExplanationSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExplanationSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_explanation_spec_dict = google_cloud_aiplatform_v1_explanation_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExplanationSpec from a dict
google_cloud_aiplatform_v1_explanation_spec_from_dict = GoogleCloudAiplatformV1ExplanationSpec.from_dict(google_cloud_aiplatform_v1_explanation_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


