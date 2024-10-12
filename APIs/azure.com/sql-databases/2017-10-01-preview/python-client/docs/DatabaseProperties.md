# DatabaseProperties

The database's properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_pause_delay** | **int** | Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled | [optional] 
**catalog_collation** | **str** | Collation of the metadata catalog. | [optional] 
**collation** | **str** | The collation of the database. | [optional] 
**create_mode** | **str** | Specifies the mode of database creation.    Default: regular database creation.    Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.    Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.    PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.    Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.    Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database&#39;s original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.    RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.    Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition. | [optional] 
**creation_date** | **datetime** | The creation date of the database (ISO8601 format). | [optional] [readonly] 
**current_service_objective_name** | **str** | The current service level objective name of the database. | [optional] [readonly] 
**current_sku** | [**Sku**](Sku.md) |  | [optional] 
**database_id** | **str** | The ID of the database. | [optional] [readonly] 
**default_secondary_location** | **str** | The default secondary region for this database. | [optional] [readonly] 
**earliest_restore_date** | **datetime** | This records the earliest start date and time that restore is available for this database (ISO8601 format). | [optional] [readonly] 
**elastic_pool_id** | **str** | The resource identifier of the elastic pool containing this database. | [optional] 
**failover_group_id** | **str** | Failover Group resource identifier that this database belongs to. | [optional] [readonly] 
**license_type** | **str** | The license type to apply for this database. | [optional] 
**long_term_retention_backup_resource_id** | **str** | The resource identifier of the long term retention backup associated with create operation of this database. | [optional] 
**max_log_size_bytes** | **int** | The max log size for this database. | [optional] [readonly] 
**max_size_bytes** | **int** | The max size of the database expressed in bytes. | [optional] 
**min_capacity** | **float** | Minimal capacity that database will always have allocated, if not paused | [optional] 
**paused_date** | **datetime** | The date when database was paused by user configuration or action (ISO8601 format). Null if the database is ready. | [optional] [readonly] 
**read_replica_count** | **int** | The number of readonly secondary replicas associated with the database to which readonly application intent connections may be routed. This property is only settable for Hyperscale edition databases. | [optional] 
**read_scale** | **str** | If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. | [optional] 
**recoverable_database_id** | **str** | The resource identifier of the recoverable database associated with create operation of this database. | [optional] 
**recovery_services_recovery_point_id** | **str** | The resource identifier of the recovery point associated with create operation of this database. | [optional] 
**requested_service_objective_name** | **str** | The requested service level objective name of the database. | [optional] [readonly] 
**restorable_dropped_database_id** | **str** | The resource identifier of the restorable dropped database associated with create operation of this database. | [optional] 
**restore_point_in_time** | **datetime** | Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. | [optional] 
**resumed_date** | **datetime** | The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused. | [optional] [readonly] 
**sample_name** | **str** | The name of the sample schema to apply when creating this database. | [optional] 
**source_database_deletion_date** | **datetime** | Specifies the time that the database was deleted. | [optional] 
**source_database_id** | **str** | The resource identifier of the source database associated with create operation of this database. | [optional] 
**status** | **str** | The status of the database. | [optional] [readonly] 
**zone_redundant** | **bool** | Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. | [optional] 

## Example

```python
from openapi_client.models.database_properties import DatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseProperties from a JSON string
database_properties_instance = DatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseProperties.to_json())

# convert the object into a dict
database_properties_dict = database_properties_instance.to_dict()
# create an instance of DatabaseProperties from a dict
database_properties_from_dict = DatabaseProperties.from_dict(database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


