# BulkEditNegativeKeywordsRequest

Request message for NegativeKeywordService.BulkEditNegativeKeywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_negative_keywords** | [**List[NegativeKeyword]**](NegativeKeyword.md) | The negative keywords to create in batch, specified as a list of NegativeKeywords. | [optional] 
**deleted_negative_keywords** | **List[str]** | The negative keywords to delete in batch, specified as a list of keyword_values. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_negative_keywords_request import BulkEditNegativeKeywordsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditNegativeKeywordsRequest from a JSON string
bulk_edit_negative_keywords_request_instance = BulkEditNegativeKeywordsRequest.from_json(json)
# print the JSON string representation of the object
print(BulkEditNegativeKeywordsRequest.to_json())

# convert the object into a dict
bulk_edit_negative_keywords_request_dict = bulk_edit_negative_keywords_request_instance.to_dict()
# create an instance of BulkEditNegativeKeywordsRequest from a dict
bulk_edit_negative_keywords_request_from_dict = BulkEditNegativeKeywordsRequest.from_dict(bulk_edit_negative_keywords_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


