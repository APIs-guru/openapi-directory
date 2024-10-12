# ConnectionMonitorResult

Information about the connection monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** |  | [optional] [default to 'A unique read-only string that changes whenever the resource is updated.']
**id** | **str** | ID of the connection monitor. | [optional] [readonly] 
**location** | **str** | Connection monitor location. | [optional] 
**name** | **str** | Name of the connection monitor. | [optional] [readonly] 
**properties** | [**ConnectionMonitorResultProperties**](ConnectionMonitorResultProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Connection monitor tags. | [optional] 
**type** | **str** | Connection monitor type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_monitor_result import ConnectionMonitorResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorResult from a JSON string
connection_monitor_result_instance = ConnectionMonitorResult.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorResult.to_json())

# convert the object into a dict
connection_monitor_result_dict = connection_monitor_result_instance.to_dict()
# create an instance of ConnectionMonitorResult from a dict
connection_monitor_result_from_dict = ConnectionMonitorResult.from_dict(connection_monitor_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


