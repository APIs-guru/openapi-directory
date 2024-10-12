# TopologyConfig

Global topology of the streaming Dataflow job, including all computations and their sharded locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computations** | [**List[ComputationTopology]**](ComputationTopology.md) | The computations associated with a streaming Dataflow job. | [optional] 
**data_disk_assignments** | [**List[DataDiskAssignment]**](DataDiskAssignment.md) | The disks assigned to a streaming Dataflow job. | [optional] 
**forwarding_key_bits** | **int** | The size (in bits) of keys that will be assigned to source messages. | [optional] 
**persistent_state_version** | **int** | Version number for persistent state. | [optional] 
**user_stage_to_computation_name_map** | **Dict[str, str]** | Maps user stage names to stable computation names. | [optional] 

## Example

```python
from openapi_client.models.topology_config import TopologyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyConfig from a JSON string
topology_config_instance = TopologyConfig.from_json(json)
# print the JSON string representation of the object
print(TopologyConfig.to_json())

# convert the object into a dict
topology_config_dict = topology_config_instance.to_dict()
# create an instance of TopologyConfig from a dict
topology_config_from_dict = TopologyConfig.from_dict(topology_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


