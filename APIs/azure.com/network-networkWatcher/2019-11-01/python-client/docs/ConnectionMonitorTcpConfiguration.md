# ConnectionMonitorTcpConfiguration

Describes the TCP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_trace_route** | **bool** | Value indicating whether path evaluation with trace route should be disabled. | [optional] 
**port** | **int** | The port to connect to. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_tcp_configuration import ConnectionMonitorTcpConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorTcpConfiguration from a JSON string
connection_monitor_tcp_configuration_instance = ConnectionMonitorTcpConfiguration.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorTcpConfiguration.to_json())

# convert the object into a dict
connection_monitor_tcp_configuration_dict = connection_monitor_tcp_configuration_instance.to_dict()
# create an instance of ConnectionMonitorTcpConfiguration from a dict
connection_monitor_tcp_configuration_from_dict = ConnectionMonitorTcpConfiguration.from_dict(connection_monitor_tcp_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


