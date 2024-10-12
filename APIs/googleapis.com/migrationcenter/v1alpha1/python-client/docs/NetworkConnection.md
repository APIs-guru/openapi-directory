# NetworkConnection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_ip_address** | **str** | Local IP address. | [optional] 
**local_port** | **int** | Local port. | [optional] 
**pid** | **str** | Process ID. | [optional] 
**process_name** | **str** | Process or service name. | [optional] 
**protocol** | **str** | Connection protocol (e.g. TCP/UDP). | [optional] 
**remote_ip_address** | **str** | Remote IP address. | [optional] 
**remote_port** | **int** | Remote port. | [optional] 
**state** | **str** | Connection state (e.g. CONNECTED). | [optional] 

## Example

```python
from openapi_client.models.network_connection import NetworkConnection

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConnection from a JSON string
network_connection_instance = NetworkConnection.from_json(json)
# print the JSON string representation of the object
print(NetworkConnection.to_json())

# convert the object into a dict
network_connection_dict = network_connection_instance.to_dict()
# create an instance of NetworkConnection from a dict
network_connection_from_dict = NetworkConnection.from_dict(network_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


