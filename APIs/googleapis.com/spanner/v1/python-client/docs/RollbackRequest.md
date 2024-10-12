# RollbackRequest

The request for Rollback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **bytearray** | Required. The transaction to roll back. | [optional] 

## Example

```python
from openapi_client.models.rollback_request import RollbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackRequest from a JSON string
rollback_request_instance = RollbackRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackRequest.to_json())

# convert the object into a dict
rollback_request_dict = rollback_request_instance.to_dict()
# create an instance of RollbackRequest from a dict
rollback_request_from_dict = RollbackRequest.from_dict(rollback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


