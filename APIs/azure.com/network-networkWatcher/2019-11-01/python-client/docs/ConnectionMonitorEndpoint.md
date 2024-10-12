# ConnectionMonitorEndpoint

Describes the connection monitor endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the connection monitor endpoint (IP or domain name). | [optional] 
**filter** | [**ConnectionMonitorEndpointFilter**](ConnectionMonitorEndpointFilter.md) |  | [optional] 
**name** | **str** | The name of the connection monitor endpoint. | 
**resource_id** | **str** | Resource ID of the connection monitor endpoint. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_endpoint import ConnectionMonitorEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorEndpoint from a JSON string
connection_monitor_endpoint_instance = ConnectionMonitorEndpoint.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorEndpoint.to_json())

# convert the object into a dict
connection_monitor_endpoint_dict = connection_monitor_endpoint_instance.to_dict()
# create an instance of ConnectionMonitorEndpoint from a dict
connection_monitor_endpoint_from_dict = ConnectionMonitorEndpoint.from_dict(connection_monitor_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


