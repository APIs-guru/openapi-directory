# BulkCreateKeywordResponse

A type that contains the response fields for the bulk request to create keywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[KeywordResponse]**](KeywordResponse.md) | A list of keywords that have been processed by the request. | [optional] 

## Example

```python
from openapi_client.models.bulk_create_keyword_response import BulkCreateKeywordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateKeywordResponse from a JSON string
bulk_create_keyword_response_instance = BulkCreateKeywordResponse.from_json(json)
# print the JSON string representation of the object
print(BulkCreateKeywordResponse.to_json())

# convert the object into a dict
bulk_create_keyword_response_dict = bulk_create_keyword_response_instance.to_dict()
# create an instance of BulkCreateKeywordResponse from a dict
bulk_create_keyword_response_from_dict = BulkCreateKeywordResponse.from_dict(bulk_create_keyword_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


