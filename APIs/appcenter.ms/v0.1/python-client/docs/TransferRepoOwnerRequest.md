# TransferRepoOwnerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_id** | **str** | The id of the related Intercom issue. | 
**new_owner_id** | **str** | The internal unique id (UUID) of the user. | 
**repository_url** | **str** | The url of repository to have its ownership transferred. | 
**responsible_admin_id** | **str** | The id of the user who started transfer process. | 
**transfer_reason** | **str** | The explanation for starting transfer process. | 

## Example

```python
from openapi_client.models.transfer_repo_owner_request import TransferRepoOwnerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferRepoOwnerRequest from a JSON string
transfer_repo_owner_request_instance = TransferRepoOwnerRequest.from_json(json)
# print the JSON string representation of the object
print(TransferRepoOwnerRequest.to_json())

# convert the object into a dict
transfer_repo_owner_request_dict = transfer_repo_owner_request_instance.to_dict()
# create an instance of TransferRepoOwnerRequest from a dict
transfer_repo_owner_request_from_dict = TransferRepoOwnerRequest.from_dict(transfer_repo_owner_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


