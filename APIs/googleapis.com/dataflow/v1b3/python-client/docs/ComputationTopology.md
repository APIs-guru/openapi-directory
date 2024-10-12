# ComputationTopology

All configuration data for a particular Computation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** | The ID of the computation. | [optional] 
**inputs** | [**List[StreamLocation]**](StreamLocation.md) | The inputs to the computation. | [optional] 
**key_ranges** | [**List[KeyRangeLocation]**](KeyRangeLocation.md) | The key ranges processed by the computation. | [optional] 
**outputs** | [**List[StreamLocation]**](StreamLocation.md) | The outputs from the computation. | [optional] 
**state_families** | [**List[StateFamilyConfig]**](StateFamilyConfig.md) | The state family values. | [optional] 
**system_stage_name** | **str** | The system stage name. | [optional] 

## Example

```python
from openapi_client.models.computation_topology import ComputationTopology

# TODO update the JSON string below
json = "{}"
# create an instance of ComputationTopology from a JSON string
computation_topology_instance = ComputationTopology.from_json(json)
# print the JSON string representation of the object
print(ComputationTopology.to_json())

# convert the object into a dict
computation_topology_dict = computation_topology_instance.to_dict()
# create an instance of ComputationTopology from a dict
computation_topology_from_dict = ComputationTopology.from_dict(computation_topology_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


