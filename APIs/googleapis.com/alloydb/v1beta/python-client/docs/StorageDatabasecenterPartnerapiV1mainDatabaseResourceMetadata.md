# StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata

Common model for database resource instance metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_configuration** | [**StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration**](StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration.md) |  | [optional] 
**backup_configuration** | [**StorageDatabasecenterPartnerapiV1mainBackupConfiguration**](StorageDatabasecenterPartnerapiV1mainBackupConfiguration.md) |  | [optional] 
**backup_run** | [**StorageDatabasecenterPartnerapiV1mainBackupRun**](StorageDatabasecenterPartnerapiV1mainBackupRun.md) |  | [optional] 
**creation_time** | **str** | The creation time of the resource, i.e. the time when resource is created and recorded in partner service. | [optional] 
**current_state** | **str** | Current state of the instance. | [optional] 
**custom_metadata** | [**StorageDatabasecenterPartnerapiV1mainCustomMetadataData**](StorageDatabasecenterPartnerapiV1mainCustomMetadataData.md) |  | [optional] 
**entitlements** | [**List[StorageDatabasecenterPartnerapiV1mainEntitlement]**](StorageDatabasecenterPartnerapiV1mainEntitlement.md) | Entitlements associated with the resource | [optional] 
**expected_state** | **str** | The state that the instance is expected to be in. For example, an instance state can transition to UNHEALTHY due to wrong patch update, while the expected state will remain at the HEALTHY. | [optional] 
**id** | [**StorageDatabasecenterPartnerapiV1mainDatabaseResourceId**](StorageDatabasecenterPartnerapiV1mainDatabaseResourceId.md) |  | [optional] 
**instance_type** | **str** | The type of the instance. Specified at creation time. | [optional] 
**location** | **str** | The resource location. REQUIRED | [optional] 
**primary_resource_id** | [**StorageDatabasecenterPartnerapiV1mainDatabaseResourceId**](StorageDatabasecenterPartnerapiV1mainDatabaseResourceId.md) |  | [optional] 
**product** | [**StorageDatabasecenterProtoCommonProduct**](StorageDatabasecenterProtoCommonProduct.md) |  | [optional] 
**resource_container** | **str** | Closest parent Cloud Resource Manager container of this resource. It must be resource name of a Cloud Resource Manager project with the format of \&quot;/\&quot;, such as \&quot;projects/123\&quot;. For GCP provided resources, number should be project number. | [optional] 
**resource_name** | **str** | Required. Different from DatabaseResourceId.unique_id, a resource name can be reused over time. That is, after a resource named \&quot;ABC\&quot; is deleted, the name \&quot;ABC\&quot; can be used to to create a new resource within the same source. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel | [optional] 
**updation_time** | **str** | The time at which the resource was updated and recorded at partner service. | [optional] 
**user_labels** | **Dict[str, str]** | User-provided labels, represented as a dictionary where each label is a single key value pair. | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_database_resource_metadata import StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata from a JSON string
storage_databasecenter_partnerapi_v1main_database_resource_metadata_instance = StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_database_resource_metadata_dict = storage_databasecenter_partnerapi_v1main_database_resource_metadata_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata from a dict
storage_databasecenter_partnerapi_v1main_database_resource_metadata_from_dict = StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata.from_dict(storage_databasecenter_partnerapi_v1main_database_resource_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


