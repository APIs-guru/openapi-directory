# GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback

Content filter results for a prompt sent in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_reason** | **str** | Output only. Blocked reason. | [optional] [readonly] 
**block_reason_message** | **str** | Output only. A readable block reason message. | [optional] [readonly] 
**safety_ratings** | [**List[GoogleCloudAiplatformV1beta1SafetyRating]**](GoogleCloudAiplatformV1beta1SafetyRating.md) | Output only. Safety ratings. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_generate_content_response_prompt_feedback import GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback from a JSON string
google_cloud_aiplatform_v1beta1_generate_content_response_prompt_feedback_instance = GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_generate_content_response_prompt_feedback_dict = google_cloud_aiplatform_v1beta1_generate_content_response_prompt_feedback_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback from a dict
google_cloud_aiplatform_v1beta1_generate_content_response_prompt_feedback_from_dict = GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback.from_dict(google_cloud_aiplatform_v1beta1_generate_content_response_prompt_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


