# CloudSqlSettings

Settings for creating a Cloud SQL database instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_policy** | **str** | The activation policy specifies when the instance is activated; it is applicable only when the instance state is &#39;RUNNABLE&#39;. Valid values: &#39;ALWAYS&#39;: The instance is on, and remains so even in the absence of connection requests. &#x60;NEVER&#x60;: The instance is off; it is not activated, even if a connection request arrives. | [optional] 
**auto_storage_increase** | **bool** | [default: ON] If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB. | [optional] 
**availability_type** | **str** | Optional. Availability type. Potential values: * &#x60;ZONAL&#x60;: The instance serves data from only one zone. Outages in that zone affect data availability. * &#x60;REGIONAL&#x60;: The instance can serve data from more than one zone in a region (it is highly available). | [optional] 
**cmek_key_name** | **str** | The KMS key name used for the csql instance. | [optional] 
**collation** | **str** | The Cloud SQL default instance level collation. | [optional] 
**data_cache_config** | [**DataCacheConfig**](DataCacheConfig.md) |  | [optional] 
**data_disk_size_gb** | **str** | The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. | [optional] 
**data_disk_type** | **str** | The type of storage: &#x60;PD_SSD&#x60; (default) or &#x60;PD_HDD&#x60;. | [optional] 
**database_flags** | **Dict[str, str]** | The database flags passed to the Cloud SQL instance at startup. An object containing a list of \&quot;key\&quot;: value pairs. Example: { \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1.3kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }. | [optional] 
**database_version** | **str** | The database engine type and version. | [optional] 
**edition** | **str** | Optional. The edition of the given Cloud SQL instance. | [optional] 
**ip_config** | [**SqlIpConfig**](SqlIpConfig.md) |  | [optional] 
**root_password** | **str** | Input only. Initial root password. | [optional] 
**root_password_set** | **bool** | Output only. Indicates If this connection profile root password is stored. | [optional] [readonly] 
**secondary_zone** | **str** | Optional. The Google Cloud Platform zone where the failover Cloud SQL database instance is located. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available). | [optional] 
**source_id** | **str** | The Database Migration Service source connection profile ID, in the format: &#x60;projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID&#x60; | [optional] 
**storage_auto_resize_limit** | **str** | The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. | [optional] 
**tier** | **str** | The tier (or machine type) for this instance, for example: &#x60;db-n1-standard-1&#x60; (MySQL instances) or &#x60;db-custom-1-3840&#x60; (PostgreSQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings). | [optional] 
**user_labels** | **Dict[str, str]** | The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of \&quot;key\&quot;: \&quot;value\&quot; pairs. Example: &#x60;{ \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;18kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }&#x60;. | [optional] 
**zone** | **str** | The Google Cloud Platform zone where your Cloud SQL database instance is located. | [optional] 

## Example

```python
from openapi_client.models.cloud_sql_settings import CloudSqlSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSqlSettings from a JSON string
cloud_sql_settings_instance = CloudSqlSettings.from_json(json)
# print the JSON string representation of the object
print(CloudSqlSettings.to_json())

# convert the object into a dict
cloud_sql_settings_dict = cloud_sql_settings_instance.to_dict()
# create an instance of CloudSqlSettings from a dict
cloud_sql_settings_from_dict = CloudSqlSettings.from_dict(cloud_sql_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


