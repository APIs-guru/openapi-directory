# Restore

The details of a metadata restore operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Output only. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}. | [optional] [readonly] 
**backup_location** | **str** | Optional. A Cloud Storage URI specifying where the backup artifacts are stored, in the format gs:///. | [optional] 
**details** | **str** | Output only. The restore details containing the revision of the service to be restored to, in format of JSON. | [optional] [readonly] 
**end_time** | **str** | Output only. The time when the restore ended. | [optional] [readonly] 
**start_time** | **str** | Output only. The time when the restore started. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the restore. | [optional] [readonly] 
**type** | **str** | Output only. The type of restore. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restore import Restore

# TODO update the JSON string below
json = "{}"
# create an instance of Restore from a JSON string
restore_instance = Restore.from_json(json)
# print the JSON string representation of the object
print(Restore.to_json())

# convert the object into a dict
restore_dict = restore_instance.to_dict()
# create an instance of Restore from a dict
restore_from_dict = Restore.from_dict(restore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


