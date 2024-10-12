# LanguageLabsAidaTrustRecitationProtoStreamRecitationResult

The recitation result for one stream input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_segment_results** | [**List[LanguageLabsAidaTrustRecitationProtoSegmentResult]**](LanguageLabsAidaTrustRecitationProtoSegmentResult.md) | The recitation result against the given dynamic data source. | [optional] 
**fully_checked_text_index** | **int** | Last index of input text fully checked for recitation in the entire streaming context. Would return &#x60;-1&#x60; if no Input was checked for recitation. | [optional] 
**recitation_action** | **str** | The recitation action for one given input. When its segments contain different actions, the overall action will be returned in the precedence of BLOCK &gt; CITE &gt; NO_ACTION. | [optional] 
**training_segment_results** | [**List[LanguageLabsAidaTrustRecitationProtoSegmentResult]**](LanguageLabsAidaTrustRecitationProtoSegmentResult.md) | The recitation result against model training data. | [optional] 

## Example

```python
from openapi_client.models.language_labs_aida_trust_recitation_proto_stream_recitation_result import LanguageLabsAidaTrustRecitationProtoStreamRecitationResult

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageLabsAidaTrustRecitationProtoStreamRecitationResult from a JSON string
language_labs_aida_trust_recitation_proto_stream_recitation_result_instance = LanguageLabsAidaTrustRecitationProtoStreamRecitationResult.from_json(json)
# print the JSON string representation of the object
print(LanguageLabsAidaTrustRecitationProtoStreamRecitationResult.to_json())

# convert the object into a dict
language_labs_aida_trust_recitation_proto_stream_recitation_result_dict = language_labs_aida_trust_recitation_proto_stream_recitation_result_instance.to_dict()
# create an instance of LanguageLabsAidaTrustRecitationProtoStreamRecitationResult from a dict
language_labs_aida_trust_recitation_proto_stream_recitation_result_from_dict = LanguageLabsAidaTrustRecitationProtoStreamRecitationResult.from_dict(language_labs_aida_trust_recitation_proto_stream_recitation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


