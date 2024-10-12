# ProcessServer

Details of the Process Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_expiry_date** | **datetime** | Agent expiry date. | [optional] 
**agent_version** | **str** | The version of the scout component on the server. | [optional] 
**agent_version_details** | [**VersionDetails**](VersionDetails.md) |  | [optional] 
**available_memory_in_bytes** | **int** | The available memory. | [optional] 
**available_space_in_bytes** | **int** | The available space. | [optional] 
**cpu_load** | **str** | The percentage of the CPU load. | [optional] 
**cpu_load_status** | **str** | The CPU load status. | [optional] 
**friendly_name** | **str** | The Process Server&#39;s friendly name. | [optional] 
**health_errors** | [**List[HealthError]**](HealthError.md) | Health errors. | [optional] 
**host_id** | **str** | The agent generated Id. | [optional] 
**id** | **str** | The Process Server Id. | [optional] 
**ip_address** | **str** | The IP address of the server. | [optional] 
**last_heartbeat** | **datetime** | The last heartbeat received from the server. | [optional] 
**machine_count** | **str** | The servers configured with this PS. | [optional] 
**memory_usage_status** | **str** | The memory usage status. | [optional] 
**mobility_service_updates** | [**List[MobilityServiceUpdate]**](MobilityServiceUpdate.md) | The list of the mobility service updates available on the Process Server. | [optional] 
**os_type** | **str** | The OS type of the server. | [optional] 
**os_version** | **str** | OS Version of the process server. Note: This will get populated if user has CS version greater than 9.12.0.0. | [optional] 
**ps_service_status** | **str** | The PS service status. | [optional] 
**replication_pair_count** | **str** | The number of replication pairs configured in this PS. | [optional] 
**space_usage_status** | **str** | The space usage status. | [optional] 
**ssl_cert_expiry_date** | **datetime** | The PS SSL cert expiry date. | [optional] 
**ssl_cert_expiry_remaining_days** | **int** | CS SSL cert expiry date. | [optional] 
**system_load** | **str** | The percentage of the system load. | [optional] 
**system_load_status** | **str** | The system load status. | [optional] 
**total_memory_in_bytes** | **int** | The total memory. | [optional] 
**total_space_in_bytes** | **int** | The total space. | [optional] 
**version_status** | **str** | Version status | [optional] 

## Example

```python
from openapi_client.models.process_server import ProcessServer

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessServer from a JSON string
process_server_instance = ProcessServer.from_json(json)
# print the JSON string representation of the object
print(ProcessServer.to_json())

# convert the object into a dict
process_server_dict = process_server_instance.to_dict()
# create an instance of ProcessServer from a dict
process_server_from_dict = ProcessServer.from_dict(process_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


