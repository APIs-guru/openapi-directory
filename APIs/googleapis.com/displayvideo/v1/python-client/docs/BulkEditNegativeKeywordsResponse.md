# BulkEditNegativeKeywordsResponse

Response message for NegativeKeywordService.BulkEditNegativeKeywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative_keywords** | [**List[NegativeKeyword]**](NegativeKeyword.md) | The list of negative keywords that have been successfully created. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_negative_keywords_response import BulkEditNegativeKeywordsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditNegativeKeywordsResponse from a JSON string
bulk_edit_negative_keywords_response_instance = BulkEditNegativeKeywordsResponse.from_json(json)
# print the JSON string representation of the object
print(BulkEditNegativeKeywordsResponse.to_json())

# convert the object into a dict
bulk_edit_negative_keywords_response_dict = bulk_edit_negative_keywords_response_instance.to_dict()
# create an instance of BulkEditNegativeKeywordsResponse from a dict
bulk_edit_negative_keywords_response_from_dict = BulkEditNegativeKeywordsResponse.from_dict(bulk_edit_negative_keywords_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


