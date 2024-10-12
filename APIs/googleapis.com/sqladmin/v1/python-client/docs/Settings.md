# Settings

Database instance settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_policy** | **str** | The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * &#x60;ALWAYS&#x60;: The instance is on, and remains so even in the absence of connection requests. * &#x60;NEVER&#x60;: The instance is off; it is not activated, even if a connection request arrives. | [optional] 
**active_directory_config** | [**SqlActiveDirectoryConfig**](SqlActiveDirectoryConfig.md) |  | [optional] 
**advanced_machine_features** | [**AdvancedMachineFeatures**](AdvancedMachineFeatures.md) |  | [optional] 
**authorized_gae_applications** | **List[str]** | The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only. | [optional] 
**availability_type** | **str** | Availability type. Potential values: * &#x60;ZONAL&#x60;: The instance serves data from only one zone. Outages in that zone affect data accessibility. * &#x60;REGIONAL&#x60;: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability). | [optional] 
**backup_configuration** | [**BackupConfiguration**](BackupConfiguration.md) |  | [optional] 
**collation** | **str** | The name of server Instance collation. | [optional] 
**connector_enforcement** | **str** | Specifies if connections must use Cloud SQL connectors. Option values include the following: &#x60;NOT_REQUIRED&#x60; (Cloud SQL instances can be connected without Cloud SQL Connectors) and &#x60;REQUIRED&#x60; (Only allow connections that use Cloud SQL Connectors). Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance. | [optional] 
**crash_safe_replication_enabled** | **bool** | Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances. | [optional] 
**data_cache_config** | [**DataCacheConfig**](DataCacheConfig.md) |  | [optional] 
**data_disk_size_gb** | **str** | The size of data disk, in GB. The data disk size minimum is 10GB. | [optional] 
**data_disk_type** | **str** | The type of data disk: &#x60;PD_SSD&#x60; (default) or &#x60;PD_HDD&#x60;. Not used for First Generation instances. | [optional] 
**database_flags** | [**List[DatabaseFlags]**](DatabaseFlags.md) | The database flags passed to the instance at startup. | [optional] 
**database_replication_enabled** | **bool** | Configuration specific to read replica instances. Indicates whether replication is enabled or not. WARNING: Changing this restarts the instance. | [optional] 
**deletion_protection_enabled** | **bool** | Configuration to protect against accidental instance deletion. | [optional] 
**deny_maintenance_periods** | [**List[DenyMaintenancePeriod]**](DenyMaintenancePeriod.md) | Deny maintenance periods | [optional] 
**edition** | **str** | Optional. The edition of the instance. | [optional] 
**insights_config** | [**InsightsConfig**](InsightsConfig.md) |  | [optional] 
**ip_configuration** | [**IpConfiguration**](IpConfiguration.md) |  | [optional] 
**kind** | **str** | This is always &#x60;sql#settings&#x60;. | [optional] 
**location_preference** | [**LocationPreference**](LocationPreference.md) |  | [optional] 
**maintenance_window** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] 
**password_validation_policy** | [**PasswordValidationPolicy**](PasswordValidationPolicy.md) |  | [optional] 
**pricing_plan** | **str** | The pricing plan for this instance. This can be either &#x60;PER_USE&#x60; or &#x60;PACKAGE&#x60;. Only &#x60;PER_USE&#x60; is supported for Second Generation instances. | [optional] 
**replication_type** | **str** | The type of replication this instance uses. This can be either &#x60;ASYNCHRONOUS&#x60; or &#x60;SYNCHRONOUS&#x60;. (Deprecated) This property was only applicable to First Generation instances. | [optional] 
**settings_version** | **str** | The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value. | [optional] 
**sql_server_audit_config** | [**SqlServerAuditConfig**](SqlServerAuditConfig.md) |  | [optional] 
**storage_auto_resize** | **bool** | Configuration to increase storage size automatically. The default value is true. | [optional] 
**storage_auto_resize_limit** | **str** | The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. | [optional] 
**tier** | **str** | The tier (or machine type) for this instance, for example &#x60;db-custom-1-3840&#x60;. WARNING: Changing this restarts the instance. | [optional] 
**time_zone** | **str** | Server timezone, relevant only for Cloud SQL for SQL Server. | [optional] 
**user_labels** | **Dict[str, str]** | User-provided labels, represented as a dictionary where each label is a single key value pair. | [optional] 

## Example

```python
from openapi_client.models.settings import Settings

# TODO update the JSON string below
json = "{}"
# create an instance of Settings from a JSON string
settings_instance = Settings.from_json(json)
# print the JSON string representation of the object
print(Settings.to_json())

# convert the object into a dict
settings_dict = settings_instance.to_dict()
# create an instance of Settings from a dict
settings_from_dict = Settings.from_dict(settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


