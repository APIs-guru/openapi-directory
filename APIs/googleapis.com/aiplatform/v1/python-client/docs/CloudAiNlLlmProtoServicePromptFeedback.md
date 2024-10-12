# CloudAiNlLlmProtoServicePromptFeedback

Content filter results for a prompt sent in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_reason** | **str** | Blocked reason. | [optional] 
**block_reason_message** | **str** | A readable block reason message. | [optional] 
**safety_ratings** | [**List[CloudAiNlLlmProtoServiceSafetyRating]**](CloudAiNlLlmProtoServiceSafetyRating.md) | Safety ratings. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_prompt_feedback import CloudAiNlLlmProtoServicePromptFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServicePromptFeedback from a JSON string
cloud_ai_nl_llm_proto_service_prompt_feedback_instance = CloudAiNlLlmProtoServicePromptFeedback.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServicePromptFeedback.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_prompt_feedback_dict = cloud_ai_nl_llm_proto_service_prompt_feedback_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServicePromptFeedback from a dict
cloud_ai_nl_llm_proto_service_prompt_feedback_from_dict = CloudAiNlLlmProtoServicePromptFeedback.from_dict(cloud_ai_nl_llm_proto_service_prompt_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


