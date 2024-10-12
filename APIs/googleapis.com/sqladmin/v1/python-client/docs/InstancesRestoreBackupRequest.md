# InstancesRestoreBackupRequest

Database instance restore backup request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restore_backup_context** | [**RestoreBackupContext**](RestoreBackupContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_restore_backup_request import InstancesRestoreBackupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesRestoreBackupRequest from a JSON string
instances_restore_backup_request_instance = InstancesRestoreBackupRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesRestoreBackupRequest.to_json())

# convert the object into a dict
instances_restore_backup_request_dict = instances_restore_backup_request_instance.to_dict()
# create an instance of InstancesRestoreBackupRequest from a dict
instances_restore_backup_request_from_dict = InstancesRestoreBackupRequest.from_dict(instances_restore_backup_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


