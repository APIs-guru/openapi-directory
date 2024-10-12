# BulkCreateNegativeKeywordRequest

A type that contains the fields for the bulk request to create negative keywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreateNegativeKeywordRequest]**](CreateNegativeKeywordRequest.md) | This array is used to pass in multiple negative keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model. | [optional] 

## Example

```python
from openapi_client.models.bulk_create_negative_keyword_request import BulkCreateNegativeKeywordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateNegativeKeywordRequest from a JSON string
bulk_create_negative_keyword_request_instance = BulkCreateNegativeKeywordRequest.from_json(json)
# print the JSON string representation of the object
print(BulkCreateNegativeKeywordRequest.to_json())

# convert the object into a dict
bulk_create_negative_keyword_request_dict = bulk_create_negative_keyword_request_instance.to_dict()
# create an instance of BulkCreateNegativeKeywordRequest from a dict
bulk_create_negative_keyword_request_from_dict = BulkCreateNegativeKeywordRequest.from_dict(bulk_create_negative_keyword_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


