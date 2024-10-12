# AdaptiveMtSentence

An AdaptiveMt sentence entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this sentence was created. | [optional] [readonly] 
**name** | **str** | Required. The resource name of the file, in form of &#x60;projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}/adaptiveMtSentences/{sentence}&#x60; | [optional] 
**source_sentence** | **str** | Required. The source sentence. | [optional] 
**target_sentence** | **str** | Required. The target sentence. | [optional] 
**update_time** | **str** | Output only. Timestamp when this sentence was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.adaptive_mt_sentence import AdaptiveMtSentence

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveMtSentence from a JSON string
adaptive_mt_sentence_instance = AdaptiveMtSentence.from_json(json)
# print the JSON string representation of the object
print(AdaptiveMtSentence.to_json())

# convert the object into a dict
adaptive_mt_sentence_dict = adaptive_mt_sentence_instance.to_dict()
# create an instance of AdaptiveMtSentence from a dict
adaptive_mt_sentence_from_dict = AdaptiveMtSentence.from_dict(adaptive_mt_sentence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


