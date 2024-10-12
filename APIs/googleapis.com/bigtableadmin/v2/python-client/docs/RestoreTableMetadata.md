# RestoreTableMetadata

Metadata type for the long-running operation returned by RestoreTable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_info** | [**BackupInfo**](BackupInfo.md) |  | [optional] 
**name** | **str** | Name of the table being created and restored to. | [optional] 
**optimize_table_operation_name** | **str** | If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored table. The metadata type of the long-running operation is OptimizeRestoreTableMetadata. The response type is Empty. This long-running operation may be automatically created by the system if applicable after the RestoreTable long-running operation completes successfully. This operation may not be created if the table is already optimized or the restore was not successful. | [optional] 
**progress** | [**OperationProgress**](OperationProgress.md) |  | [optional] 
**source_type** | **str** | The type of the restore source. | [optional] 

## Example

```python
from openapi_client.models.restore_table_metadata import RestoreTableMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreTableMetadata from a JSON string
restore_table_metadata_instance = RestoreTableMetadata.from_json(json)
# print the JSON string representation of the object
print(RestoreTableMetadata.to_json())

# convert the object into a dict
restore_table_metadata_dict = restore_table_metadata_instance.to_dict()
# create an instance of RestoreTableMetadata from a dict
restore_table_metadata_from_dict = RestoreTableMetadata.from_dict(restore_table_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


