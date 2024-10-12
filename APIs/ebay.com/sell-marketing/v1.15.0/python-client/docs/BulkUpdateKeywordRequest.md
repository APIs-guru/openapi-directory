# BulkUpdateKeywordRequest

A type that defines the fields for the <b>BulkUpdateKeyword</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateKeywordByKeywordIdRequest]**](UpdateKeywordByKeywordIdRequest.md) | Use this array to update the bid values and/or statuses of one or more existing keywords. | [optional] 

## Example

```python
from openapi_client.models.bulk_update_keyword_request import BulkUpdateKeywordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateKeywordRequest from a JSON string
bulk_update_keyword_request_instance = BulkUpdateKeywordRequest.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateKeywordRequest.to_json())

# convert the object into a dict
bulk_update_keyword_request_dict = bulk_update_keyword_request_instance.to_dict()
# create an instance of BulkUpdateKeywordRequest from a dict
bulk_update_keyword_request_from_dict = BulkUpdateKeywordRequest.from_dict(bulk_update_keyword_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


