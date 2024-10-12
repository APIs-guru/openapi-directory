# CloudAiNlLlmProtoServiceSafetyRating

Safety rating corresponding to the generated content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked** | **bool** | Indicates whether the content was filtered out because of this rating. | [optional] 
**category** | **str** | Harm category. | [optional] 
**influential_terms** | [**List[CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm]**](CloudAiNlLlmProtoServiceSafetyRatingInfluentialTerm.md) | The influential terms that could potentially block the response. | [optional] 
**probability** | **str** | Harm probability levels in the content. | [optional] 
**probability_score** | **float** | Harm probability score. | [optional] 
**severity** | **str** | Harm severity levels in the content. | [optional] 
**severity_score** | **float** | Harm severity score. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_safety_rating import CloudAiNlLlmProtoServiceSafetyRating

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceSafetyRating from a JSON string
cloud_ai_nl_llm_proto_service_safety_rating_instance = CloudAiNlLlmProtoServiceSafetyRating.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceSafetyRating.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_safety_rating_dict = cloud_ai_nl_llm_proto_service_safety_rating_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceSafetyRating from a dict
cloud_ai_nl_llm_proto_service_safety_rating_from_dict = CloudAiNlLlmProtoServiceSafetyRating.from_dict(cloud_ai_nl_llm_proto_service_safety_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


