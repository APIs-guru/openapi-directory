# GoogleCloudAiplatformV1GenerateContentResponse

Response message for [PredictionService.GenerateContent].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[GoogleCloudAiplatformV1Candidate]**](GoogleCloudAiplatformV1Candidate.md) | Output only. Generated candidates. | [optional] [readonly] 
**prompt_feedback** | [**GoogleCloudAiplatformV1GenerateContentResponsePromptFeedback**](GoogleCloudAiplatformV1GenerateContentResponsePromptFeedback.md) |  | [optional] 
**usage_metadata** | [**GoogleCloudAiplatformV1GenerateContentResponseUsageMetadata**](GoogleCloudAiplatformV1GenerateContentResponseUsageMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_generate_content_response import GoogleCloudAiplatformV1GenerateContentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1GenerateContentResponse from a JSON string
google_cloud_aiplatform_v1_generate_content_response_instance = GoogleCloudAiplatformV1GenerateContentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1GenerateContentResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_generate_content_response_dict = google_cloud_aiplatform_v1_generate_content_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1GenerateContentResponse from a dict
google_cloud_aiplatform_v1_generate_content_response_from_dict = GoogleCloudAiplatformV1GenerateContentResponse.from_dict(google_cloud_aiplatform_v1_generate_content_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


