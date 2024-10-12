# CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm

The influential term that could potentially block the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin_offset** | **int** | The beginning offset of the influential term. | [optional] 
**confidence** | **float** | The confidence score of the influential term. | [optional] 
**source** | **str** | The source of the influential term, prompt or response. | [optional] 
**term** | **str** | The influential term. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_safety_rating_influential_term import CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm from a JSON string
cloud_ai_nl_llm_proto_service_safety_rating_influential_term_instance = CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_safety_rating_influential_term_dict = cloud_ai_nl_llm_proto_service_safety_rating_influential_term_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm from a dict
cloud_ai_nl_llm_proto_service_safety_rating_influential_term_from_dict = CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm.from_dict(cloud_ai_nl_llm_proto_service_safety_rating_influential_term_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


