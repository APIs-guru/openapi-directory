# BulkCreateKeywordRequest

A type that contains the fields for the bulk request to create keywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreateKeywordRequest]**](CreateKeywordRequest.md) | This array is used to pass in multiple keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model. Up to {max value} keywords can be created with one call. | [optional] 

## Example

```python
from openapi_client.models.bulk_create_keyword_request import BulkCreateKeywordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateKeywordRequest from a JSON string
bulk_create_keyword_request_instance = BulkCreateKeywordRequest.from_json(json)
# print the JSON string representation of the object
print(BulkCreateKeywordRequest.to_json())

# convert the object into a dict
bulk_create_keyword_request_dict = bulk_create_keyword_request_instance.to_dict()
# create an instance of BulkCreateKeywordRequest from a dict
bulk_create_keyword_request_from_dict = BulkCreateKeywordRequest.from_dict(bulk_create_keyword_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


