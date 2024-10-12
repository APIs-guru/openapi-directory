# Restore

Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 20

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan&#39;s backup_plan. Format: &#x60;projects/*/locations/*/backupPlans/*/backups/*&#x60;. | [optional] 
**cluster** | **str** | Output only. The target cluster into which this Restore will restore data. Valid formats: - &#x60;projects/*/locations/*/clusters/*&#x60; - &#x60;projects/*/zones/*/clusters/*&#x60; Inherited from parent RestorePlan&#39;s cluster value. | [optional] [readonly] 
**complete_time** | **str** | Output only. Timestamp of when the restore operation completed. | [optional] [readonly] 
**create_time** | **str** | Output only. The timestamp when this Restore resource was created. | [optional] [readonly] 
**description** | **str** | User specified descriptive string for this Restore. | [optional] 
**etag** | **str** | Output only. &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response to &#x60;GetRestore&#x60;, and systems are expected to put that etag in the request to &#x60;UpdateRestore&#x60; or &#x60;DeleteRestore&#x60; to ensure that their change will be applied to the same version of the resource. | [optional] [readonly] 
**labels** | **Dict[str, str]** | A set of custom labels supplied by user. | [optional] 
**name** | **str** | Output only. The full name of the Restore resource. Format: &#x60;projects/*/locations/*/restorePlans/*/restores/*&#x60; | [optional] [readonly] 
**resources_excluded_count** | **int** | Output only. Number of resources excluded during the restore execution. | [optional] [readonly] 
**resources_failed_count** | **int** | Output only. Number of resources that failed to be restored during the restore execution. | [optional] [readonly] 
**resources_restored_count** | **int** | Output only. Number of resources restored during the restore execution. | [optional] [readonly] 
**restore_config** | [**RestoreConfig**](RestoreConfig.md) |  | [optional] 
**state** | **str** | Output only. The current state of the Restore. | [optional] [readonly] 
**state_reason** | **str** | Output only. Human-readable description of why the Restore is in its current state. | [optional] [readonly] 
**uid** | **str** | Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when this Restore resource was last updated. | [optional] [readonly] 
**volumes_restored_count** | **int** | Output only. Number of volumes restored during the restore execution. | [optional] [readonly] 

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


