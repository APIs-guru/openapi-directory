# BulkUpdateKeywordResponse

A type that defines the fields for the <b>BulkUpdateKeyword</b> response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[UpdateKeywordResponse]**](UpdateKeywordResponse.md) | A list of keywords that have been processed from the bulk request. | [optional] 

## Example

```python
from openapi_client.models.bulk_update_keyword_response import BulkUpdateKeywordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateKeywordResponse from a JSON string
bulk_update_keyword_response_instance = BulkUpdateKeywordResponse.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateKeywordResponse.to_json())

# convert the object into a dict
bulk_update_keyword_response_dict = bulk_update_keyword_response_instance.to_dict()
# create an instance of BulkUpdateKeywordResponse from a dict
bulk_update_keyword_response_from_dict = BulkUpdateKeywordResponse.from_dict(bulk_update_keyword_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


