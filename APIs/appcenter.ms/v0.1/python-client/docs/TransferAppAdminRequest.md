# TransferAppAdminRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_id** | **str** | The id of the related Intercom issue. | 
**new_owner_id** | **str** | The internal unique id (UUID) of the user/org. | 
**responsible_admin_id** | **str** | The id of the user who started transfer process. | 
**transfer_reason** | **str** | The explanation for starting transfer process. | 

## Example

```python
from openapi_client.models.transfer_app_admin_request import TransferAppAdminRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferAppAdminRequest from a JSON string
transfer_app_admin_request_instance = TransferAppAdminRequest.from_json(json)
# print the JSON string representation of the object
print(TransferAppAdminRequest.to_json())

# convert the object into a dict
transfer_app_admin_request_dict = transfer_app_admin_request_instance.to_dict()
# create an instance of TransferAppAdminRequest from a dict
transfer_app_admin_request_from_dict = TransferAppAdminRequest.from_dict(transfer_app_admin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


