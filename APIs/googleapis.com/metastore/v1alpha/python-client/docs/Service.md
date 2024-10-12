# Service

A managed metastore service that serves metadata queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_gcs_uri** | **str** | Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the metastore service was created. | [optional] [readonly] 
**database_type** | **str** | Immutable. The database type that the Metastore service stores its data. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**endpoint_uri** | **str** | Output only. The URI of the endpoint used to access the metastore service. | [optional] [readonly] 
**hive_metastore_config** | [**HiveMetastoreConfig**](HiveMetastoreConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | User-defined labels for the metastore service. | [optional] 
**maintenance_window** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] 
**metadata_integration** | [**MetadataIntegration**](MetadataIntegration.md) |  | [optional] 
**metadata_management_activity** | [**MetadataManagementActivity**](MetadataManagementActivity.md) |  | [optional] 
**name** | **str** | Immutable. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}. | [optional] 
**network** | **str** | Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}. | [optional] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**port** | **int** | The TCP port at which the metastore service is reached. Default: 9083. | [optional] 
**release_channel** | **str** | Immutable. The release channel of the service. If unspecified, defaults to STABLE. | [optional] 
**scaling_config** | [**ScalingConfig**](ScalingConfig.md) |  | [optional] 
**scheduled_backup** | [**ScheduledBackup**](ScheduledBackup.md) |  | [optional] 
**state** | **str** | Output only. The current state of the metastore service. | [optional] [readonly] 
**state_message** | **str** | Output only. Additional information about the current state of the metastore service, if available. | [optional] [readonly] 
**telemetry_config** | [**TelemetryConfig**](TelemetryConfig.md) |  | [optional] 
**tier** | **str** | The tier of the service. | [optional] 
**uid** | **str** | Output only. The globally unique resource identifier of the metastore service. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the metastore service was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


