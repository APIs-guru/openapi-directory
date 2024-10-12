# BackupStatusResponse

BackupStatus response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | Specifies the product specific container name. E.g. iaasvmcontainer;iaasvmcontainer;csname;vmname. | [optional] 
**error_code** | **str** | ErrorCode in case of intent failed | [optional] 
**error_message** | **str** | ErrorMessage in case of intent failed. | [optional] 
**fabric_name** | **str** | Specifies the fabric name - Azure or AD | [optional] 
**policy_name** | **str** | Specifies the policy name which is used for protection | [optional] 
**protected_item_name** | **str** | Specifies the product specific ds name. E.g. vm;iaasvmcontainer;csname;vmname. | [optional] 
**protection_status** | **str** | Specifies whether the container is registered or not | [optional] 
**registration_status** | **str** | Container registration status | [optional] 
**vault_id** | **str** | Specifies the arm resource id of the vault | [optional] 

## Example

```python
from openapi_client.models.backup_status_response import BackupStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BackupStatusResponse from a JSON string
backup_status_response_instance = BackupStatusResponse.from_json(json)
# print the JSON string representation of the object
print(BackupStatusResponse.to_json())

# convert the object into a dict
backup_status_response_dict = backup_status_response_instance.to_dict()
# create an instance of BackupStatusResponse from a dict
backup_status_response_from_dict = BackupStatusResponse.from_dict(backup_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


