# RecommendedElasticPoolPropertiesDatabasesInnerProperties

Represents the properties of a database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collation** | **str** | The collation of the database. If createMode is not Default, this value is ignored. | [optional] 
**containment_state** | **int** | The containment state of the database. | [optional] [readonly] 
**create_mode** | **str** | Specifies the mode of database creation.  Default: regular database creation.  Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.  OnlineSecondary/NonReadableSecondary: creates a database as a (readable or nonreadable) secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.  PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.  Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.  Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database&#39;s original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.  RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.  Copy, NonReadableSecondary, OnlineSecondary and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition. | [optional] 
**creation_date** | **datetime** | The creation date of the database (ISO8601 format). | [optional] [readonly] 
**current_service_objective_id** | **str** | The current service level objective ID of the database. This is the ID of the service level objective that is currently active. | [optional] [readonly] 
**database_id** | **str** | The ID of the database. | [optional] [readonly] 
**default_secondary_location** | **str** | The default secondary region for this database. | [optional] [readonly] 
**earliest_restore_date** | **datetime** | This records the earliest start date and time that restore is available for this database (ISO8601 format). | [optional] [readonly] 
**edition** | **str** | The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.    The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the &#x60;Capabilities_ListByLocation&#x60; REST API or one of the following commands:    &#x60;&#x60;&#x60;azurecli  az sql db list-editions -l &lt;location&gt; -o table  &#x60;&#x60;&#x60;&#x60;    &#x60;&#x60;&#x60;powershell  Get-AzSqlServerServiceObjective -Location &lt;location&gt;  &#x60;&#x60;&#x60;&#x60;   | [optional] 
**elastic_pool_name** | **str** | The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition. | [optional] 
**failover_group_id** | **str** | The resource identifier of the failover group containing this database. | [optional] [readonly] 
**max_size_bytes** | **str** | The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: \&quot;Capabilities_ListByLocation.\&quot; | [optional] 
**read_scale** | **str** | Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition. | [optional] 
**recommended_index** | [**List[RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInner]**](RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInner.md) | The recommended indices for this database. | [optional] [readonly] 
**recovery_services_recovery_point_resource_id** | **str** | Conditional. If createMode is RestoreLongTermRetentionBackup, then this value is required. Specifies the resource ID of the recovery point to restore from. | [optional] 
**requested_service_objective_id** | **str** | The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.    The list of SKUs may vary by region and support offer. To determine the service objective ids that are available to your subscription in an Azure region, use the &#x60;Capabilities_ListByLocation&#x60; REST API. | [optional] 
**requested_service_objective_name** | **str** | The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property.     The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the &#x60;Capabilities_ListByLocation&#x60; REST API or one of the following commands:    &#x60;&#x60;&#x60;azurecli  az sql db list-editions -l &lt;location&gt; -o table  &#x60;&#x60;&#x60;&#x60;    &#x60;&#x60;&#x60;powershell  Get-AzSqlServerServiceObjective -Location &lt;location&gt;  &#x60;&#x60;&#x60;&#x60;   | [optional] 
**restore_point_in_time** | **datetime** | Conditional. If createMode is PointInTimeRestore, this value is required. If createMode is Restore, this value is optional. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. Must be greater than or equal to the source database&#39;s earliestRestoreDate value. | [optional] 
**sample_name** | **str** | Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition. | [optional] 
**service_level_objective** | **str** | The current service level objective of the database. | [optional] [readonly] 
**service_tier_advisors** | [**List[RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInner]**](RecommendedElasticPoolPropertiesDatabasesInnerPropertiesServiceTierAdvisorsInner.md) | The list of service tier advisors for this database. Expanded property | [optional] [readonly] 
**source_database_deletion_date** | **datetime** | Conditional. If createMode is Restore and sourceDatabaseId is the deleted database&#39;s original resource id when it existed (as opposed to its current restorable dropped database id), then this value is required. Specifies the time that the database was deleted. | [optional] 
**source_database_id** | **str** | Conditional. If createMode is Copy, NonReadableSecondary, OnlineSecondary, PointInTimeRestore, Recovery, or Restore, then this value is required. Specifies the resource ID of the source database. If createMode is NonReadableSecondary or OnlineSecondary, the name of the source database must be the same as the new database being created. | [optional] 
**status** | **str** | The status of the database. | [optional] [readonly] 
**transparent_data_encryption** | [**List[RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner]**](RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner.md) | The transparent data encryption info for this database. | [optional] [readonly] 
**zone_redundant** | **bool** | Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. | [optional] 

## Example

```python
from openapi_client.models.recommended_elastic_pool_properties_databases_inner_properties import RecommendedElasticPoolPropertiesDatabasesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolPropertiesDatabasesInnerProperties from a JSON string
recommended_elastic_pool_properties_databases_inner_properties_instance = RecommendedElasticPoolPropertiesDatabasesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolPropertiesDatabasesInnerProperties.to_json())

# convert the object into a dict
recommended_elastic_pool_properties_databases_inner_properties_dict = recommended_elastic_pool_properties_databases_inner_properties_instance.to_dict()
# create an instance of RecommendedElasticPoolPropertiesDatabasesInnerProperties from a dict
recommended_elastic_pool_properties_databases_inner_properties_from_dict = RecommendedElasticPoolPropertiesDatabasesInnerProperties.from_dict(recommended_elastic_pool_properties_databases_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


