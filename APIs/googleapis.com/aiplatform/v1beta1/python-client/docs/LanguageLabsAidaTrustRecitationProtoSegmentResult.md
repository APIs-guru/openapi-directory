# LanguageLabsAidaTrustRecitationProtoSegmentResult

The recitation result for each segment in a given input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_dataset** | **str** | The dataset the segment came from. | [optional] 
**display_attribution_message** | **str** | human-friendly string that contains information from doc_attribution which could be shown by clients | [optional] 
**doc_attribution** | [**LanguageLabsAidaTrustRecitationProtoDocAttribution**](LanguageLabsAidaTrustRecitationProtoDocAttribution.md) |  | [optional] 
**doc_occurrences** | **int** | number of documents that contained this segment | [optional] 
**end_index** | **int** |  | [optional] 
**raw_text** | **str** | The raw text in the given input that is corresponding to the segment. It will be available only when &#39;return_segment_raw_text&#39; is enabled in the request options. | [optional] 
**segment_recitation_action** | **str** |  | [optional] 
**start_index** | **int** | The segment boundary start (inclusive) and end index (exclusive) in the given text. In the streaming RPC, the indexes always start from the beginning of the first text in the entire stream. The indexes are measured in UTF-16 code units. | [optional] 

## Example

```python
from openapi_client.models.language_labs_aida_trust_recitation_proto_segment_result import LanguageLabsAidaTrustRecitationProtoSegmentResult

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageLabsAidaTrustRecitationProtoSegmentResult from a JSON string
language_labs_aida_trust_recitation_proto_segment_result_instance = LanguageLabsAidaTrustRecitationProtoSegmentResult.from_json(json)
# print the JSON string representation of the object
print(LanguageLabsAidaTrustRecitationProtoSegmentResult.to_json())

# convert the object into a dict
language_labs_aida_trust_recitation_proto_segment_result_dict = language_labs_aida_trust_recitation_proto_segment_result_instance.to_dict()
# create an instance of LanguageLabsAidaTrustRecitationProtoSegmentResult from a dict
language_labs_aida_trust_recitation_proto_segment_result_from_dict = LanguageLabsAidaTrustRecitationProtoSegmentResult.from_dict(language_labs_aida_trust_recitation_proto_segment_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


