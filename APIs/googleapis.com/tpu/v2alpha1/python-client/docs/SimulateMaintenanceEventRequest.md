# SimulateMaintenanceEventRequest

Request for SimulateMaintenanceEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**worker_ids** | **List[str]** | The 0-based worker ID. If it is empty, worker ID 0 will be selected for maintenance event simulation. A maintenance event will only be fired on the first specified worker ID. Future implementations may support firing on multiple workers. | [optional] 

## Example

```python
from openapi_client.models.simulate_maintenance_event_request import SimulateMaintenanceEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SimulateMaintenanceEventRequest from a JSON string
simulate_maintenance_event_request_instance = SimulateMaintenanceEventRequest.from_json(json)
# print the JSON string representation of the object
print(SimulateMaintenanceEventRequest.to_json())

# convert the object into a dict
simulate_maintenance_event_request_dict = simulate_maintenance_event_request_instance.to_dict()
# create an instance of SimulateMaintenanceEventRequest from a dict
simulate_maintenance_event_request_from_dict = SimulateMaintenanceEventRequest.from_dict(simulate_maintenance_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


