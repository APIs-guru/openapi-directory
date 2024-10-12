# ManagedDatabaseProperties

The managed database's properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_collation** | **str** | Collation of the metadata catalog. | [optional] 
**collation** | **str** | Collation of the managed database. | [optional] 
**create_mode** | **str** | Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. | [optional] 
**creation_date** | **datetime** | Creation date of the database. | [optional] [readonly] 
**default_secondary_location** | **str** | Geo paired region. | [optional] [readonly] 
**earliest_restore_point** | **datetime** | Earliest restore point in time for point in time restore. | [optional] [readonly] 
**failover_group_id** | **str** | Instance Failover Group resource identifier that this managed database belongs to. | [optional] [readonly] 
**recoverable_database_id** | **str** | The resource identifier of the recoverable database associated with create operation of this database. | [optional] 
**restorable_dropped_database_id** | **str** | The restorable dropped database resource id to restore when creating this database. | [optional] 
**restore_point_in_time** | **datetime** | Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. | [optional] 
**source_database_id** | **str** | The resource identifier of the source database associated with create operation of this database. | [optional] 
**status** | **str** | Status of the database. | [optional] [readonly] 
**storage_container_sas_token** | **str** | Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token. | [optional] 
**storage_container_uri** | **str** | Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored. | [optional] 

## Example

```python
from openapi_client.models.managed_database_properties import ManagedDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedDatabaseProperties from a JSON string
managed_database_properties_instance = ManagedDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedDatabaseProperties.to_json())

# convert the object into a dict
managed_database_properties_dict = managed_database_properties_instance.to_dict()
# create an instance of ManagedDatabaseProperties from a dict
managed_database_properties_from_dict = ManagedDatabaseProperties.from_dict(managed_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


