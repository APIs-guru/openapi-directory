# TransferError

Details for an invalid transfer or forward.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | User&#39;s email address. This may be unavailable if the entity was deleted. | [optional] 
**entity_type** | **str** | Type of entity being transferred to. For ring group members, this should always be USER. | [optional] 
**id** | **str** | Ring group or auto attendant ID. Not set for users. | [optional] 
**invalid_reason** | **str** | Reason for the error. | [optional] 
**name** | **str** | User&#39;s full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted. | [optional] 

## Example

```python
from openapi_client.models.transfer_error import TransferError

# TODO update the JSON string below
json = "{}"
# create an instance of TransferError from a JSON string
transfer_error_instance = TransferError.from_json(json)
# print the JSON string representation of the object
print(TransferError.to_json())

# convert the object into a dict
transfer_error_dict = transfer_error_instance.to_dict()
# create an instance of TransferError from a dict
transfer_error_from_dict = TransferError.from_dict(transfer_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


