# BulkUpdateNegativeKeywordResponse

A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[UpdateNegativeKeywordResponse]**](UpdateNegativeKeywordResponse.md) | A list of negative keywords that have been processed from the bulk request. | [optional] 

## Example

```python
from openapi_client.models.bulk_update_negative_keyword_response import BulkUpdateNegativeKeywordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateNegativeKeywordResponse from a JSON string
bulk_update_negative_keyword_response_instance = BulkUpdateNegativeKeywordResponse.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateNegativeKeywordResponse.to_json())

# convert the object into a dict
bulk_update_negative_keyword_response_dict = bulk_update_negative_keyword_response_instance.to_dict()
# create an instance of BulkUpdateNegativeKeywordResponse from a dict
bulk_update_negative_keyword_response_from_dict = BulkUpdateNegativeKeywordResponse.from_dict(bulk_update_negative_keyword_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


