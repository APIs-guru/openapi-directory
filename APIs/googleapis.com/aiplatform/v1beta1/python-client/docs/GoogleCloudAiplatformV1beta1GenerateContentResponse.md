# GoogleCloudAiplatformV1beta1GenerateContentResponse

Response message for [PredictionService.GenerateContent].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[GoogleCloudAiplatformV1beta1Candidate]**](GoogleCloudAiplatformV1beta1Candidate.md) | Output only. Generated candidates. | [optional] [readonly] 
**prompt_feedback** | [**GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback**](GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback.md) |  | [optional] 
**usage_metadata** | [**GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata**](GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_generate_content_response import GoogleCloudAiplatformV1beta1GenerateContentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GenerateContentResponse from a JSON string
google_cloud_aiplatform_v1beta1_generate_content_response_instance = GoogleCloudAiplatformV1beta1GenerateContentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GenerateContentResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_generate_content_response_dict = google_cloud_aiplatform_v1beta1_generate_content_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GenerateContentResponse from a dict
google_cloud_aiplatform_v1beta1_generate_content_response_from_dict = GoogleCloudAiplatformV1beta1GenerateContentResponse.from_dict(google_cloud_aiplatform_v1beta1_generate_content_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


