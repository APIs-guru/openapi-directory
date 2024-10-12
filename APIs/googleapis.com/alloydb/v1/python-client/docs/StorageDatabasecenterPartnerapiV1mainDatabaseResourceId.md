# StorageDatabasecenterPartnerapiV1mainDatabaseResourceId

DatabaseResourceId will serve as primary key for any resource ingestion event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **str** | Required. Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged | [optional] 
**provider_description** | **str** | Optional. Needs to be used only when the provider is PROVIDER_OTHER. | [optional] 
**resource_type** | **str** | Required. The type of resource this ID is identifying. Ex redis.googleapis.com/Instance, redis.googleapis.com/Cluster, alloydb.googleapis.com/Cluster, alloydb.googleapis.com/Instance, spanner.googleapis.com/Instance REQUIRED Please refer go/condor-common-datamodel | [optional] 
**unique_id** | **str** | Required. A service-local token that distinguishes this resource from other resources within the same service. | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_database_resource_id import StorageDatabasecenterPartnerapiV1mainDatabaseResourceId

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainDatabaseResourceId from a JSON string
storage_databasecenter_partnerapi_v1main_database_resource_id_instance = StorageDatabasecenterPartnerapiV1mainDatabaseResourceId.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainDatabaseResourceId.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_database_resource_id_dict = storage_databasecenter_partnerapi_v1main_database_resource_id_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainDatabaseResourceId from a dict
storage_databasecenter_partnerapi_v1main_database_resource_id_from_dict = StorageDatabasecenterPartnerapiV1mainDatabaseResourceId.from_dict(storage_databasecenter_partnerapi_v1main_database_resource_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


