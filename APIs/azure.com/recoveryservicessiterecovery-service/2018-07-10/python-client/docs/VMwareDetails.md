# VMwareDetails

Store the fabric details specific to the VMware fabric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_count** | **str** | The number of source and target servers configured to talk to this CS. | [optional] 
**agent_expiry_date** | **datetime** | Agent expiry date. | [optional] 
**agent_version** | **str** | The agent Version. | [optional] 
**agent_version_details** | [**VersionDetails**](VersionDetails.md) |  | [optional] 
**available_memory_in_bytes** | **int** | The available memory. | [optional] 
**available_space_in_bytes** | **int** | The available space. | [optional] 
**cpu_load** | **str** | The percentage of the CPU load. | [optional] 
**cpu_load_status** | **str** | The CPU load status. | [optional] 
**cs_service_status** | **str** | The CS service status. | [optional] 
**database_server_load** | **str** | The database server load. | [optional] 
**database_server_load_status** | **str** | The database server load status. | [optional] 
**host_name** | **str** | The host name. | [optional] 
**ip_address** | **str** | The IP address. | [optional] 
**last_heartbeat** | **datetime** | The last heartbeat received from CS server. | [optional] 
**master_target_servers** | [**List[MasterTargetServer]**](MasterTargetServer.md) | The list of Master Target servers associated with the fabric. | [optional] 
**memory_usage_status** | **str** | The memory usage status. | [optional] 
**process_server_count** | **str** | The number of process servers. | [optional] 
**process_servers** | [**List[ProcessServer]**](ProcessServer.md) | The list of Process Servers associated with the fabric. | [optional] 
**protected_servers** | **str** | The number of protected servers. | [optional] 
**ps_template_version** | **str** | PS template version. | [optional] 
**replication_pair_count** | **str** | The number of replication pairs configured in this CS. | [optional] 
**run_as_accounts** | [**List[RunAsAccount]**](RunAsAccount.md) | The list of run as accounts created on the server. | [optional] 
**space_usage_status** | **str** | The space usage status. | [optional] 
**ssl_cert_expiry_date** | **datetime** | CS SSL cert expiry date. | [optional] 
**ssl_cert_expiry_remaining_days** | **int** | CS SSL cert expiry date. | [optional] 
**system_load** | **str** | The percentage of the system load. | [optional] 
**system_load_status** | **str** | The system load status. | [optional] 
**total_memory_in_bytes** | **int** | The total memory. | [optional] 
**total_space_in_bytes** | **int** | The total space. | [optional] 
**version_status** | **str** | Version status | [optional] 
**web_load** | **str** | The web load. | [optional] 
**web_load_status** | **str** | The web load status. | [optional] 

## Example

```python
from openapi_client.models.v_mware_details import VMwareDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareDetails from a JSON string
v_mware_details_instance = VMwareDetails.from_json(json)
# print the JSON string representation of the object
print(VMwareDetails.to_json())

# convert the object into a dict
v_mware_details_dict = v_mware_details_instance.to_dict()
# create an instance of VMwareDetails from a dict
v_mware_details_from_dict = VMwareDetails.from_dict(v_mware_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


