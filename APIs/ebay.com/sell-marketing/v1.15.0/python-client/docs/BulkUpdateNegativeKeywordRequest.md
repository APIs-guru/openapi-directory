# BulkUpdateNegativeKeywordRequest

A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateNegativeKeywordIdRequest]**](UpdateNegativeKeywordIdRequest.md) | An array to update the statuses of one or more existing negative keywords. | [optional] 

## Example

```python
from openapi_client.models.bulk_update_negative_keyword_request import BulkUpdateNegativeKeywordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateNegativeKeywordRequest from a JSON string
bulk_update_negative_keyword_request_instance = BulkUpdateNegativeKeywordRequest.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateNegativeKeywordRequest.to_json())

# convert the object into a dict
bulk_update_negative_keyword_request_dict = bulk_update_negative_keyword_request_instance.to_dict()
# create an instance of BulkUpdateNegativeKeywordRequest from a dict
bulk_update_negative_keyword_request_from_dict = BulkUpdateNegativeKeywordRequest.from_dict(bulk_update_negative_keyword_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


