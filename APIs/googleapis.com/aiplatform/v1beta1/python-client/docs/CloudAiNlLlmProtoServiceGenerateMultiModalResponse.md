# CloudAiNlLlmProtoServiceGenerateMultiModalResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[CloudAiNlLlmProtoServiceCandidate]**](CloudAiNlLlmProtoServiceCandidate.md) | Possible candidate responses to the conversation up until this point. | [optional] 
**debug_metadata** | [**CloudAiNlLlmProtoServiceMessageMetadata**](CloudAiNlLlmProtoServiceMessageMetadata.md) |  | [optional] 
**facts** | [**List[CloudAiNlLlmProtoServiceFact]**](CloudAiNlLlmProtoServiceFact.md) | External facts retrieved for factuality/grounding. | [optional] 
**prompt_feedback** | [**CloudAiNlLlmProtoServicePromptFeedback**](CloudAiNlLlmProtoServicePromptFeedback.md) |  | [optional] 
**reporting_metrics** | [**IntelligenceCloudAutomlXpsReportingMetrics**](IntelligenceCloudAutomlXpsReportingMetrics.md) |  | [optional] 
**usage_metadata** | [**CloudAiNlLlmProtoServiceUsageMetadata**](CloudAiNlLlmProtoServiceUsageMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_generate_multi_modal_response import CloudAiNlLlmProtoServiceGenerateMultiModalResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceGenerateMultiModalResponse from a JSON string
cloud_ai_nl_llm_proto_service_generate_multi_modal_response_instance = CloudAiNlLlmProtoServiceGenerateMultiModalResponse.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceGenerateMultiModalResponse.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_generate_multi_modal_response_dict = cloud_ai_nl_llm_proto_service_generate_multi_modal_response_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceGenerateMultiModalResponse from a dict
cloud_ai_nl_llm_proto_service_generate_multi_modal_response_from_dict = CloudAiNlLlmProtoServiceGenerateMultiModalResponse.from_dict(cloud_ai_nl_llm_proto_service_generate_multi_modal_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


