# LanguageLabsAidaTrustRecitationProtoRecitationResult

The recitation result for one input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_segment_results** | [**List[LanguageLabsAidaTrustRecitationProtoSegmentResult]**](LanguageLabsAidaTrustRecitationProtoSegmentResult.md) |  | [optional] 
**recitation_action** | **str** | The recitation action for one given input. When its segments contain different actions, the overall action will be returned in the precedence of BLOCK &gt; CITE &gt; NO_ACTION. When the given input is not found in any source, the recitation action will not be specified. | [optional] 
**training_segment_results** | [**List[LanguageLabsAidaTrustRecitationProtoSegmentResult]**](LanguageLabsAidaTrustRecitationProtoSegmentResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.language_labs_aida_trust_recitation_proto_recitation_result import LanguageLabsAidaTrustRecitationProtoRecitationResult

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageLabsAidaTrustRecitationProtoRecitationResult from a JSON string
language_labs_aida_trust_recitation_proto_recitation_result_instance = LanguageLabsAidaTrustRecitationProtoRecitationResult.from_json(json)
# print the JSON string representation of the object
print(LanguageLabsAidaTrustRecitationProtoRecitationResult.to_json())

# convert the object into a dict
language_labs_aida_trust_recitation_proto_recitation_result_dict = language_labs_aida_trust_recitation_proto_recitation_result_instance.to_dict()
# create an instance of LanguageLabsAidaTrustRecitationProtoRecitationResult from a dict
language_labs_aida_trust_recitation_proto_recitation_result_from_dict = LanguageLabsAidaTrustRecitationProtoRecitationResult.from_dict(language_labs_aida_trust_recitation_proto_recitation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


