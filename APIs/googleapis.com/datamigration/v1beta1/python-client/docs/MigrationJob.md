# MigrationJob

Represents a Database Migration Service migration job object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format, accurate to nanoseconds. Example: \&quot;2014-10-02T15:01:23.045123456Z\&quot;. | [optional] [readonly] 
**destination** | **str** | Required. The resource name (URI) of the destination connection profile. | [optional] 
**destination_database** | [**DatabaseType**](DatabaseType.md) |  | [optional] 
**display_name** | **str** | The migration job display name. | [optional] 
**dump_path** | **str** | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). | [optional] 
**duration** | **str** | Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by &#39;s&#39;. Example: \&quot;3.5s\&quot;. | [optional] [readonly] 
**end_time** | **str** | Output only. If the migration job is completed, the time when it was completed. | [optional] [readonly] 
**error** | [**Status**](Status.md) |  | [optional] 
**labels** | **Dict[str, str]** | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of \&quot;key\&quot;: \&quot;value\&quot; pairs. Example: &#x60;{ \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1.3kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }&#x60;. | [optional] 
**name** | **str** | The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. | [optional] 
**phase** | **str** | Output only. The current migration job phase. | [optional] [readonly] 
**reverse_ssh_connectivity** | [**ReverseSshConnectivity**](ReverseSshConnectivity.md) |  | [optional] 
**source** | **str** | Required. The resource name (URI) of the source connection profile. | [optional] 
**source_database** | [**DatabaseType**](DatabaseType.md) |  | [optional] 
**state** | **str** | The current migration job state. | [optional] 
**static_ip_connectivity** | **object** | The source database will allow incoming connections from the destination database&#39;s public IP. You can retrieve the Cloud SQL instance&#39;s public IP from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. | [optional] 
**type** | **str** | Required. The migration job type. | [optional] 
**update_time** | **str** | Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format, accurate to nanoseconds. Example: \&quot;2014-10-02T15:01:23.045123456Z\&quot;. | [optional] [readonly] 
**vpc_peering_connectivity** | [**VpcPeeringConnectivity**](VpcPeeringConnectivity.md) |  | [optional] 

## Example

```python
from openapi_client.models.migration_job import MigrationJob

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationJob from a JSON string
migration_job_instance = MigrationJob.from_json(json)
# print the JSON string representation of the object
print(MigrationJob.to_json())

# convert the object into a dict
migration_job_dict = migration_job_instance.to_dict()
# create an instance of MigrationJob from a dict
migration_job_from_dict = MigrationJob.from_dict(migration_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


