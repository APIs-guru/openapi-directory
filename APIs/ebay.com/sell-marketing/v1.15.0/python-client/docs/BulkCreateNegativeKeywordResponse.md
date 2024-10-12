# BulkCreateNegativeKeywordResponse

A type that contains the response fields for the bulk request to create negative keywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[NegativeKeywordResponse]**](NegativeKeywordResponse.md) | A list of negative keywords that have been processed by the request. | [optional] 

## Example

```python
from openapi_client.models.bulk_create_negative_keyword_response import BulkCreateNegativeKeywordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateNegativeKeywordResponse from a JSON string
bulk_create_negative_keyword_response_instance = BulkCreateNegativeKeywordResponse.from_json(json)
# print the JSON string representation of the object
print(BulkCreateNegativeKeywordResponse.to_json())

# convert the object into a dict
bulk_create_negative_keyword_response_dict = bulk_create_negative_keyword_response_instance.to_dict()
# create an instance of BulkCreateNegativeKeywordResponse from a dict
bulk_create_negative_keyword_response_from_dict = BulkCreateNegativeKeywordResponse.from_dict(bulk_create_negative_keyword_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


