# ManagedInstanceProperties

The properties of a managed instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_login** | **str** | Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). | [optional] 
**administrator_login_password** | **str** | The administrator login password (required for managed instance creation). | [optional] 
**collation** | **str** | Collation of the managed instance. | [optional] 
**dns_zone** | **str** | The Dns Zone that the managed instance is in. | [optional] [readonly] 
**dns_zone_partner** | **str** | The resource id of another managed instance whose DNS zone this managed instance will share after creation. | [optional] 
**fully_qualified_domain_name** | **str** | The fully qualified domain name of the managed instance. | [optional] [readonly] 
**instance_pool_id** | **str** | The Id of the instance pool this managed server belongs to. | [optional] 
**license_type** | **str** | The license type. Possible values are &#39;LicenseIncluded&#39; (regular price inclusive of a new SQL license) and &#39;BasePrice&#39; (discounted AHB price for bringing your own SQL licenses). | [optional] 
**managed_instance_create_mode** | **str** | Specifies the mode of database creation.    Default: Regular instance creation.    Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified. | [optional] 
**proxy_override** | **str** | Connection type used for connecting to the instance. | [optional] 
**public_data_endpoint_enabled** | **bool** | Whether or not the public data endpoint is enabled. | [optional] 
**restore_point_in_time** | **datetime** | Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. | [optional] 
**source_managed_instance_id** | **str** | The resource identifier of the source managed instance associated with create operation of this instance. | [optional] 
**state** | **str** | The state of the managed instance. | [optional] [readonly] 
**storage_size_in_gb** | **int** | Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only. | [optional] 
**subnet_id** | **str** | Subnet resource ID for the managed instance. | [optional] 
**timezone_id** | **str** | Id of the timezone. Allowed values are timezones supported by Windows.  Windows keeps details on supported timezones, including the id, in registry under  KEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Time Zones.  You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.  List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.  An example of valid timezone id is \&quot;Pacific Standard Time\&quot; or \&quot;W. Europe Standard Time\&quot;. | [optional] 
**v_cores** | **int** | The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80. | [optional] 

## Example

```python
from openapi_client.models.managed_instance_properties import ManagedInstanceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceProperties from a JSON string
managed_instance_properties_instance = ManagedInstanceProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceProperties.to_json())

# convert the object into a dict
managed_instance_properties_dict = managed_instance_properties_instance.to_dict()
# create an instance of ManagedInstanceProperties from a dict
managed_instance_properties_from_dict = ManagedInstanceProperties.from_dict(managed_instance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


