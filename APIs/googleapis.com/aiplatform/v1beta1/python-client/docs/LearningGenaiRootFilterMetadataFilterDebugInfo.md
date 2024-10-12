# LearningGenaiRootFilterMetadataFilterDebugInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifier_output** | [**LearningGenaiRootClassifierOutput**](LearningGenaiRootClassifierOutput.md) |  | [optional] 
**default_metadata** | **str** |  | [optional] 
**language_filter_result** | [**LearningGenaiRootLanguageFilterResult**](LearningGenaiRootLanguageFilterResult.md) |  | [optional] 
**rai_output** | [**LearningGenaiRootRAIOutput**](LearningGenaiRootRAIOutput.md) |  | [optional] 
**rai_result** | [**CloudAiNlLlmProtoServiceRaiResult**](CloudAiNlLlmProtoServiceRaiResult.md) |  | [optional] 
**rai_signal** | [**CloudAiNlLlmProtoServiceRaiSignal**](CloudAiNlLlmProtoServiceRaiSignal.md) |  | [optional] 
**stream_recitation_result** | [**LanguageLabsAidaTrustRecitationProtoStreamRecitationResult**](LanguageLabsAidaTrustRecitationProtoStreamRecitationResult.md) |  | [optional] 
**takedown_result** | [**LearningGenaiRootTakedownResult**](LearningGenaiRootTakedownResult.md) |  | [optional] 
**toxicity_result** | [**LearningGenaiRootToxicityResult**](LearningGenaiRootToxicityResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_filter_metadata_filter_debug_info import LearningGenaiRootFilterMetadataFilterDebugInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootFilterMetadataFilterDebugInfo from a JSON string
learning_genai_root_filter_metadata_filter_debug_info_instance = LearningGenaiRootFilterMetadataFilterDebugInfo.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootFilterMetadataFilterDebugInfo.to_json())

# convert the object into a dict
learning_genai_root_filter_metadata_filter_debug_info_dict = learning_genai_root_filter_metadata_filter_debug_info_instance.to_dict()
# create an instance of LearningGenaiRootFilterMetadataFilterDebugInfo from a dict
learning_genai_root_filter_metadata_filter_debug_info_from_dict = LearningGenaiRootFilterMetadataFilterDebugInfo.from_dict(learning_genai_root_filter_metadata_filter_debug_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


