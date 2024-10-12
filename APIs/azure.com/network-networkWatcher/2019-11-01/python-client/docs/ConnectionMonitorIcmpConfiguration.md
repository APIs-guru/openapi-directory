# ConnectionMonitorIcmpConfiguration

Describes the ICMP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_trace_route** | **bool** | Value indicating whether path evaluation with trace route should be disabled. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_icmp_configuration import ConnectionMonitorIcmpConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorIcmpConfiguration from a JSON string
connection_monitor_icmp_configuration_instance = ConnectionMonitorIcmpConfiguration.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorIcmpConfiguration.to_json())

# convert the object into a dict
connection_monitor_icmp_configuration_dict = connection_monitor_icmp_configuration_instance.to_dict()
# create an instance of ConnectionMonitorIcmpConfiguration from a dict
connection_monitor_icmp_configuration_from_dict = ConnectionMonitorIcmpConfiguration.from_dict(connection_monitor_icmp_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


