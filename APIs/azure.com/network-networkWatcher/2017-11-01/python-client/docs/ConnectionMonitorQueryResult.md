# ConnectionMonitorQueryResult

List of connection states snapshots.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**states** | [**List[ConnectionStateSnapshot]**](ConnectionStateSnapshot.md) | Information about connection states. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_query_result import ConnectionMonitorQueryResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorQueryResult from a JSON string
connection_monitor_query_result_instance = ConnectionMonitorQueryResult.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorQueryResult.to_json())

# convert the object into a dict
connection_monitor_query_result_dict = connection_monitor_query_result_instance.to_dict()
# create an instance of ConnectionMonitorQueryResult from a dict
connection_monitor_query_result_from_dict = ConnectionMonitorQueryResult.from_dict(connection_monitor_query_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


