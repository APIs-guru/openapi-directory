# OpportunisticMaintenanceStrategy

Strategy that will trigger maintenance on behalf of the customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintenance_availability_window** | **str** | The window of time that opportunistic maintenance can run. Example: A setting of 14 days implies that opportunistic maintenance can only be ran in the 2 weeks leading up to the scheduled maintenance date. Setting 28 days allows opportunistic maintenance to run at any time in the scheduled maintenance window (all &#x60;PERIODIC&#x60; maintenance is set 28 days in advance). | [optional] 
**min_nodes_per_pool** | **str** | The minimum nodes required to be available in a pool. Blocks maintenance if it would cause the number of running nodes to dip below this value. | [optional] 
**node_idle_time_window** | **str** | The amount of time that a node can remain idle (no customer owned workloads running), before triggering maintenance. | [optional] 

## Example

```python
from openapi_client.models.opportunistic_maintenance_strategy import OpportunisticMaintenanceStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunisticMaintenanceStrategy from a JSON string
opportunistic_maintenance_strategy_instance = OpportunisticMaintenanceStrategy.from_json(json)
# print the JSON string representation of the object
print(OpportunisticMaintenanceStrategy.to_json())

# convert the object into a dict
opportunistic_maintenance_strategy_dict = opportunistic_maintenance_strategy_instance.to_dict()
# create an instance of OpportunisticMaintenanceStrategy from a dict
opportunistic_maintenance_strategy_from_dict = OpportunisticMaintenanceStrategy.from_dict(opportunistic_maintenance_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


