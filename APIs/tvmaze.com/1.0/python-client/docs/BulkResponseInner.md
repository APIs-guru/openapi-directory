# BulkResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | The HTTP code that corresponds to this item | [optional] 
**errors** | **object** | A list of validation errors for this item (in case of error) | [optional] 
**input** | **object** | The request data that belonged to this response (in case of error) | [optional] 
**message** | **str** | A human-readable error message (in case of error) | [optional] 
**result** | **object** | The resulting created/updated object (in case of success) | [optional] 

## Example

```python
from openapi_client.models.bulk_response_inner import BulkResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of BulkResponseInner from a JSON string
bulk_response_inner_instance = BulkResponseInner.from_json(json)
# print the JSON string representation of the object
print(BulkResponseInner.to_json())

# convert the object into a dict
bulk_response_inner_dict = bulk_response_inner_instance.to_dict()
# create an instance of BulkResponseInner from a dict
bulk_response_inner_from_dict = BulkResponseInner.from_dict(bulk_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


