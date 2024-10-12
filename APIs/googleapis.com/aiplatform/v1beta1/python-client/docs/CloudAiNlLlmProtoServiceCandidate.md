# CloudAiNlLlmProtoServiceCandidate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**citation_metadata** | [**CloudAiNlLlmProtoServiceCitationMetadata**](CloudAiNlLlmProtoServiceCitationMetadata.md) |  | [optional] 
**content** | [**CloudAiNlLlmProtoServiceContent**](CloudAiNlLlmProtoServiceContent.md) |  | [optional] 
**finish_message** | **str** | A string that describes the filtering behavior in more detail. Only filled when reason is set. | [optional] 
**finish_reason** | **str** | The reason why the model stopped generating tokens. | [optional] 
**grounding_metadata** | [**LearningGenaiRootGroundingMetadata**](LearningGenaiRootGroundingMetadata.md) |  | [optional] 
**index** | **int** | Index of the candidate. | [optional] 
**safety_ratings** | [**List[CloudAiNlLlmProtoServiceSafetyRating]**](CloudAiNlLlmProtoServiceSafetyRating.md) | Safety ratings of the generated content. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_candidate import CloudAiNlLlmProtoServiceCandidate

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceCandidate from a JSON string
cloud_ai_nl_llm_proto_service_candidate_instance = CloudAiNlLlmProtoServiceCandidate.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceCandidate.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_candidate_dict = cloud_ai_nl_llm_proto_service_candidate_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceCandidate from a dict
cloud_ai_nl_llm_proto_service_candidate_from_dict = CloudAiNlLlmProtoServiceCandidate.from_dict(cloud_ai_nl_llm_proto_service_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


