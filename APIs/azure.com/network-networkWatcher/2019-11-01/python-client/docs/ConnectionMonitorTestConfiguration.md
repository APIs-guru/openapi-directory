# ConnectionMonitorTestConfiguration

Describes a connection monitor test configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_configuration** | [**ConnectionMonitorHttpConfiguration**](ConnectionMonitorHttpConfiguration.md) |  | [optional] 
**icmp_configuration** | [**ConnectionMonitorIcmpConfiguration**](ConnectionMonitorIcmpConfiguration.md) |  | [optional] 
**name** | **str** | The name of the connection monitor test configuration. | 
**preferred_ip_version** | **str** | The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters. | [optional] 
**protocol** | **str** | The protocol to use in test evaluation. | 
**success_threshold** | [**ConnectionMonitorSuccessThreshold**](ConnectionMonitorSuccessThreshold.md) |  | [optional] 
**tcp_configuration** | [**ConnectionMonitorTcpConfiguration**](ConnectionMonitorTcpConfiguration.md) |  | [optional] 
**test_frequency_sec** | **int** | The frequency of test evaluation, in seconds. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_test_configuration import ConnectionMonitorTestConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorTestConfiguration from a JSON string
connection_monitor_test_configuration_instance = ConnectionMonitorTestConfiguration.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorTestConfiguration.to_json())

# convert the object into a dict
connection_monitor_test_configuration_dict = connection_monitor_test_configuration_instance.to_dict()
# create an instance of ConnectionMonitorTestConfiguration from a dict
connection_monitor_test_configuration_from_dict = ConnectionMonitorTestConfiguration.from_dict(connection_monitor_test_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


