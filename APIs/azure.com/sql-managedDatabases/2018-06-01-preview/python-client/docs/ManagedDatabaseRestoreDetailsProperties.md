# ManagedDatabaseRestoreDetailsProperties

The managed database's restore details properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_reason** | **str** | The reason why restore is in Blocked state. | [optional] [readonly] 
**current_restoring_file_name** | **str** | Current restoring file name. | [optional] [readonly] 
**last_restored_file_name** | **str** | Last restored file name. | [optional] [readonly] 
**last_restored_file_time** | **datetime** | Last restored file time. | [optional] [readonly] 
**last_uploaded_file_name** | **str** | Last uploaded file name. | [optional] [readonly] 
**last_uploaded_file_time** | **datetime** | Last uploaded file time. | [optional] [readonly] 
**number_of_files_detected** | **int** | Number of files detected. | [optional] [readonly] 
**percent_completed** | **float** | Percent completed. | [optional] [readonly] 
**status** | **str** | Restore status. | [optional] [readonly] 
**unrestorable_files** | **List[str]** | List of unrestorable files. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_database_restore_details_properties import ManagedDatabaseRestoreDetailsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedDatabaseRestoreDetailsProperties from a JSON string
managed_database_restore_details_properties_instance = ManagedDatabaseRestoreDetailsProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedDatabaseRestoreDetailsProperties.to_json())

# convert the object into a dict
managed_database_restore_details_properties_dict = managed_database_restore_details_properties_instance.to_dict()
# create an instance of ManagedDatabaseRestoreDetailsProperties from a dict
managed_database_restore_details_properties_from_dict = ManagedDatabaseRestoreDetailsProperties.from_dict(managed_database_restore_details_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


