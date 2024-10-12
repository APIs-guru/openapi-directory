# CloudAiNlLlmProtoServiceRaiResult

The RAI results for a given text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aida_recitation_result** | [**LanguageLabsAidaTrustRecitationProtoRecitationResult**](LanguageLabsAidaTrustRecitationProtoRecitationResult.md) |  | [optional] 
**blocked** | **bool** | Use &#x60;triggered_blocklist&#x60;. | [optional] 
**error_codes** | **List[int]** | The error codes indicate which RAI filters block the response. | [optional] 
**filtered** | **bool** | Whether the text should be filtered and not shown to the end user. This is determined based on a combination of &#x60;triggered_recitation&#x60;, &#x60;triggered_blocklist&#x60;, &#x60;language_filter_result&#x60;, and &#x60;triggered_safety_filter&#x60;. | [optional] 
**language_filter_result** | [**LearningGenaiRootLanguageFilterResult**](LearningGenaiRootLanguageFilterResult.md) |  | [optional] 
**rai_signals** | [**List[CloudAiNlLlmProtoServiceRaiSignal]**](CloudAiNlLlmProtoServiceRaiSignal.md) | The RAI signals for the text. | [optional] 
**triggered_blocklist** | **bool** | Whether the text triggered the blocklist. | [optional] 
**triggered_recitation** | **bool** | Whether the text should be blocked by the recitation result from Aida recitation checker. It is determined from aida_recitation_result. | [optional] 
**triggered_safety_filter** | **bool** | Whether the text triggered the safety filter. Currently, this is due to CSAI triggering or one of four categories (derogatory, sexual, toxic, violent) having a score over the filter threshold. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_rai_result import CloudAiNlLlmProtoServiceRaiResult

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceRaiResult from a JSON string
cloud_ai_nl_llm_proto_service_rai_result_instance = CloudAiNlLlmProtoServiceRaiResult.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceRaiResult.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_rai_result_dict = cloud_ai_nl_llm_proto_service_rai_result_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceRaiResult from a dict
cloud_ai_nl_llm_proto_service_rai_result_from_dict = CloudAiNlLlmProtoServiceRaiResult.from_dict(cloud_ai_nl_llm_proto_service_rai_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


