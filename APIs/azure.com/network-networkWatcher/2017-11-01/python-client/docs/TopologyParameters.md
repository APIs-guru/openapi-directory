# TopologyParameters

Parameters that define the representation of topology.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_resource_group_name** | **str** | The name of the target resource group to perform topology on. | [optional] 
**target_subnet** | [**TopologyParametersTargetSubnet**](TopologyParametersTargetSubnet.md) |  | [optional] 
**target_virtual_network** | [**TopologyParametersTargetSubnet**](TopologyParametersTargetSubnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.topology_parameters import TopologyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyParameters from a JSON string
topology_parameters_instance = TopologyParameters.from_json(json)
# print the JSON string representation of the object
print(TopologyParameters.to_json())

# convert the object into a dict
topology_parameters_dict = topology_parameters_instance.to_dict()
# create an instance of TopologyParameters from a dict
topology_parameters_from_dict = TopologyParameters.from_dict(topology_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


