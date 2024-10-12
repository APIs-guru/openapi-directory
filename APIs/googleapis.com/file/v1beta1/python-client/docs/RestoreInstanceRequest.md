# RestoreInstanceRequest

RestoreInstanceRequest restores an existing instance's file share from a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_share** | **str** | Required. Name of the file share in the Filestore instance that the backup is being restored to. | [optional] 
**source_backup** | **str** | The resource name of the backup, in the format &#x60;projects/{project_id}/locations/{location_id}/backups/{backup_id}&#x60;. | [optional] 
**source_snapshot** | **str** | The resource name of the snapshot, in the format &#x60;projects/{project_id}/locations/{location_id}/snapshots/{snapshot_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.restore_instance_request import RestoreInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreInstanceRequest from a JSON string
restore_instance_request_instance = RestoreInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(RestoreInstanceRequest.to_json())

# convert the object into a dict
restore_instance_request_dict = restore_instance_request_instance.to_dict()
# create an instance of RestoreInstanceRequest from a dict
restore_instance_request_from_dict = RestoreInstanceRequest.from_dict(restore_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


