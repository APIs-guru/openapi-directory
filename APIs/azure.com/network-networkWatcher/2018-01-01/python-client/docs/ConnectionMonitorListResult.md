# ConnectionMonitorListResult

List of connection monitors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConnectionMonitorResult]**](ConnectionMonitorResult.md) | Information about connection monitors. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_list_result import ConnectionMonitorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorListResult from a JSON string
connection_monitor_list_result_instance = ConnectionMonitorListResult.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorListResult.to_json())

# convert the object into a dict
connection_monitor_list_result_dict = connection_monitor_list_result_instance.to_dict()
# create an instance of ConnectionMonitorListResult from a dict
connection_monitor_list_result_from_dict = ConnectionMonitorListResult.from_dict(connection_monitor_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


