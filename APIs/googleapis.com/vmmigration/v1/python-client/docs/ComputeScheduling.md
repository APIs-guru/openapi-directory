# ComputeScheduling

Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_node_cpus** | **int** | The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. Ignored if no node_affinites are configured. | [optional] 
**node_affinities** | [**List[SchedulingNodeAffinity]**](SchedulingNodeAffinity.md) | A set of node affinity and anti-affinity configurations for sole tenant nodes. | [optional] 
**on_host_maintenance** | **str** | How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance. | [optional] 
**restart_type** | **str** | Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to &#x60;automaticRestart&#x60; field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart. | [optional] 

## Example

```python
from openapi_client.models.compute_scheduling import ComputeScheduling

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeScheduling from a JSON string
compute_scheduling_instance = ComputeScheduling.from_json(json)
# print the JSON string representation of the object
print(ComputeScheduling.to_json())

# convert the object into a dict
compute_scheduling_dict = compute_scheduling_instance.to_dict()
# create an instance of ComputeScheduling from a dict
compute_scheduling_from_dict = ComputeScheduling.from_dict(compute_scheduling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


