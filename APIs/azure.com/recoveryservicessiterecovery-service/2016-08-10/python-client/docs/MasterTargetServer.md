# MasterTargetServer

Details of a Master Target Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | The version of the scout component on the server. | [optional] 
**data_stores** | [**List[DataStore]**](DataStore.md) | The list of data stores in the fabric. | [optional] 
**disk_count** | **int** | Disk count of the master target. | [optional] 
**id** | **str** | The server Id. | [optional] 
**ip_address** | **str** | The IP address of the server. | [optional] 
**last_heartbeat** | **datetime** | The last heartbeat received from the server. | [optional] 
**name** | **str** | The server name. | [optional] 
**os_type** | **str** | The OS type of the server. | [optional] 
**os_version** | **str** | OS Version of the master target. | [optional] 
**retention_volumes** | [**List[RetentionVolume]**](RetentionVolume.md) | The retention volumes of Master target Server. | [optional] 
**validation_errors** | [**List[HealthError]**](HealthError.md) | Validation errors. | [optional] 
**version_status** | **str** | Version status | [optional] 

## Example

```python
from openapi_client.models.master_target_server import MasterTargetServer

# TODO update the JSON string below
json = "{}"
# create an instance of MasterTargetServer from a JSON string
master_target_server_instance = MasterTargetServer.from_json(json)
# print the JSON string representation of the object
print(MasterTargetServer.to_json())

# convert the object into a dict
master_target_server_dict = master_target_server_instance.to_dict()
# create an instance of MasterTargetServer from a dict
master_target_server_from_dict = MasterTargetServer.from_dict(master_target_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


