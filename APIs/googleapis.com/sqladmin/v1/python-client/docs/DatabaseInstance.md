# DatabaseInstance

A Cloud SQL instance resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_maintenance_versions** | **List[str]** | Output only. List all maintenance versions applicable on the instance | [optional] [readonly] 
**backend_type** | **str** | The backend type. &#x60;SECOND_GEN&#x60;: Cloud SQL database instance. &#x60;EXTERNAL&#x60;: A database server that is not managed by Google. This property is read-only; use the &#x60;tier&#x60; property in the &#x60;settings&#x60; object to determine the database type. | [optional] 
**connection_name** | **str** | Connection name of the Cloud SQL instance used in connection strings. | [optional] 
**create_time** | **str** | Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] [readonly] 
**current_disk_size** | **str** | The current disk usage of the instance in bytes. This property has been deprecated. Use the \&quot;cloudsql.googleapis.com/database/disk/bytes_used\&quot; metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details. | [optional] 
**database_installed_version** | **str** | Output only. Stores the current database version running on the instance including minor version such as &#x60;MYSQL_8_0_18&#x60;. | [optional] [readonly] 
**database_version** | **str** | The database engine type and version. The &#x60;databaseVersion&#x60; field cannot be changed after instance creation. | [optional] 
**disk_encryption_configuration** | [**DiskEncryptionConfiguration**](DiskEncryptionConfiguration.md) |  | [optional] 
**disk_encryption_status** | [**DiskEncryptionStatus**](DiskEncryptionStatus.md) |  | [optional] 
**dns_name** | **str** | Output only. The dns name of the instance. | [optional] [readonly] 
**etag** | **str** | This field is deprecated and will be removed from a future version of the API. Use the &#x60;settings.settingsVersion&#x60; field instead. | [optional] 
**failover_replica** | [**DatabaseInstanceFailoverReplica**](DatabaseInstanceFailoverReplica.md) |  | [optional] 
**gce_zone** | **str** | The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance. | [optional] 
**instance_type** | **str** | The instance type. | [optional] 
**ip_addresses** | [**List[IpMapping]**](IpMapping.md) | The assigned IP addresses for the instance. | [optional] 
**ipv6_address** | **str** | The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances. | [optional] 
**kind** | **str** | This is always &#x60;sql#instance&#x60;. | [optional] 
**maintenance_version** | **str** | The current software version on the instance. | [optional] 
**master_instance_name** | **str** | The name of the instance which will act as primary in the replication setup. | [optional] 
**max_disk_size** | **str** | The maximum disk size of the instance in bytes. | [optional] 
**name** | **str** | Name of the Cloud SQL instance. This does not include the project ID. | [optional] 
**on_premises_configuration** | [**OnPremisesConfiguration**](OnPremisesConfiguration.md) |  | [optional] 
**out_of_disk_report** | [**SqlOutOfDiskReport**](SqlOutOfDiskReport.md) |  | [optional] 
**primary_dns_name** | **str** | Output only. DEPRECATED: please use write_endpoint instead. | [optional] [readonly] 
**project** | **str** | The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable. | [optional] 
**psc_service_attachment_link** | **str** | Output only. The link to service attachment of PSC instance. | [optional] [readonly] 
**region** | **str** | The geographical region of the Cloud SQL instance. It can be one of the [regions](https://cloud.google.com/sql/docs/mysql/locations#location-r) where Cloud SQL operates: For example, &#x60;asia-east1&#x60;, &#x60;europe-west1&#x60;, and &#x60;us-central1&#x60;. The default value is &#x60;us-central1&#x60;. | [optional] 
**replica_configuration** | [**ReplicaConfiguration**](ReplicaConfiguration.md) |  | [optional] 
**replica_names** | **List[str]** | The replicas of the instance. | [optional] 
**root_password** | **str** | Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances. | [optional] 
**satisfies_pzs** | **bool** | The status indicating if instance satisfiesPzs. Reserved for future use. | [optional] 
**scheduled_maintenance** | [**SqlScheduledMaintenance**](SqlScheduledMaintenance.md) |  | [optional] 
**secondary_gce_zone** | **str** | The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone. | [optional] 
**self_link** | **str** | The URI of this resource. | [optional] 
**server_ca_cert** | [**SslCert**](SslCert.md) |  | [optional] 
**service_account_email_address** | **str** | The service account email address assigned to the instance.\\This property is read-only. | [optional] 
**settings** | [**Settings**](Settings.md) |  | [optional] 
**sql_network_architecture** | **str** |  | [optional] 
**state** | **str** | The current serving state of the Cloud SQL instance. | [optional] 
**suspension_reason** | **List[str]** | If the instance state is SUSPENDED, the reason for the suspension. | [optional] 
**write_endpoint** | **str** | Output only. The dns name of the primary instance in a replication group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_instance import DatabaseInstance

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstance from a JSON string
database_instance_instance = DatabaseInstance.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstance.to_json())

# convert the object into a dict
database_instance_dict = database_instance_instance.to_dict()
# create an instance of DatabaseInstance from a dict
database_instance_from_dict = DatabaseInstance.from_dict(database_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


