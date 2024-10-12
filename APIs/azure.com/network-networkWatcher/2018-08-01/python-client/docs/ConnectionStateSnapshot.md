# ConnectionStateSnapshot

Connection state snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_latency_in_ms** | **int** | Average latency in ms. | [optional] 
**connection_state** | **str** | The connection state. | [optional] 
**end_time** | **datetime** | The end time of the connection snapshot. | [optional] 
**evaluation_state** | **str** | Connectivity analysis evaluation state. | [optional] 
**hops** | [**List[ConnectivityHop]**](ConnectivityHop.md) | List of hops between the source and the destination. | [optional] [readonly] 
**max_latency_in_ms** | **int** | Maximum latency in ms. | [optional] 
**min_latency_in_ms** | **int** | Minimum latency in ms. | [optional] 
**probes_failed** | **int** | The number of failed probes. | [optional] 
**probes_sent** | **int** | The number of sent probes. | [optional] 
**start_time** | **datetime** | The start time of the connection snapshot. | [optional] 

## Example

```python
from openapi_client.models.connection_state_snapshot import ConnectionStateSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionStateSnapshot from a JSON string
connection_state_snapshot_instance = ConnectionStateSnapshot.from_json(json)
# print the JSON string representation of the object
print(ConnectionStateSnapshot.to_json())

# convert the object into a dict
connection_state_snapshot_dict = connection_state_snapshot_instance.to_dict()
# create an instance of ConnectionStateSnapshot from a dict
connection_state_snapshot_from_dict = ConnectionStateSnapshot.from_dict(connection_state_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


