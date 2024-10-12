# BackupStatusRequest

BackupStatus request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**po_logical_name** | **str** | Protectable Item Logical Name | [optional] 
**resource_id** | **str** | Entire ARM resource id of the resource | [optional] 
**resource_type** | **str** | Container Type - VM, SQLPaaS, DPM, AzureFileShare... | [optional] 

## Example

```python
from openapi_client.models.backup_status_request import BackupStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BackupStatusRequest from a JSON string
backup_status_request_instance = BackupStatusRequest.from_json(json)
# print the JSON string representation of the object
print(BackupStatusRequest.to_json())

# convert the object into a dict
backup_status_request_dict = backup_status_request_instance.to_dict()
# create an instance of BackupStatusRequest from a dict
backup_status_request_from_dict = BackupStatusRequest.from_dict(backup_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


