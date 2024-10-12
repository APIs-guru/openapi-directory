# StorageDatabasecenterPartnerapiV1mainDatabaseMetadata

Metadata for individual databases created in an instance. i.e. spanner instance can have multiple databases with unique configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_configuration** | [**StorageDatabasecenterPartnerapiV1mainBackupConfiguration**](StorageDatabasecenterPartnerapiV1mainBackupConfiguration.md) |  | [optional] 
**backup_run** | [**StorageDatabasecenterPartnerapiV1mainBackupRun**](StorageDatabasecenterPartnerapiV1mainBackupRun.md) |  | [optional] 
**product** | [**StorageDatabasecenterProtoCommonProduct**](StorageDatabasecenterProtoCommonProduct.md) |  | [optional] 
**resource_id** | [**StorageDatabasecenterPartnerapiV1mainDatabaseResourceId**](StorageDatabasecenterPartnerapiV1mainDatabaseResourceId.md) |  | [optional] 
**resource_name** | **str** | Required. Database name. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_database_metadata import StorageDatabasecenterPartnerapiV1mainDatabaseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainDatabaseMetadata from a JSON string
storage_databasecenter_partnerapi_v1main_database_metadata_instance = StorageDatabasecenterPartnerapiV1mainDatabaseMetadata.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainDatabaseMetadata.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_database_metadata_dict = storage_databasecenter_partnerapi_v1main_database_metadata_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainDatabaseMetadata from a dict
storage_databasecenter_partnerapi_v1main_database_metadata_from_dict = StorageDatabasecenterPartnerapiV1mainDatabaseMetadata.from_dict(storage_databasecenter_partnerapi_v1main_database_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


