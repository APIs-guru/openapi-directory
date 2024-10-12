# ListAdaptiveMtSentencesResponse

List AdaptiveMt sentences response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptive_mt_sentences** | [**List[AdaptiveMtSentence]**](AdaptiveMtSentence.md) | Output only. The list of AdaptiveMtSentences. | [optional] [readonly] 
**next_page_token** | **str** | Optional.  | [optional] 

## Example

```python
from openapi_client.models.list_adaptive_mt_sentences_response import ListAdaptiveMtSentencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdaptiveMtSentencesResponse from a JSON string
list_adaptive_mt_sentences_response_instance = ListAdaptiveMtSentencesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdaptiveMtSentencesResponse.to_json())

# convert the object into a dict
list_adaptive_mt_sentences_response_dict = list_adaptive_mt_sentences_response_instance.to_dict()
# create an instance of ListAdaptiveMtSentencesResponse from a dict
list_adaptive_mt_sentences_response_from_dict = ListAdaptiveMtSentencesResponse.from_dict(list_adaptive_mt_sentences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


