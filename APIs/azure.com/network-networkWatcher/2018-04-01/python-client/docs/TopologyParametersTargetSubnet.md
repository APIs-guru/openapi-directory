# TopologyParametersTargetSubnet

Reference to another subresource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.topology_parameters_target_subnet import TopologyParametersTargetSubnet

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyParametersTargetSubnet from a JSON string
topology_parameters_target_subnet_instance = TopologyParametersTargetSubnet.from_json(json)
# print the JSON string representation of the object
print(TopologyParametersTargetSubnet.to_json())

# convert the object into a dict
topology_parameters_target_subnet_dict = topology_parameters_target_subnet_instance.to_dict()
# create an instance of TopologyParametersTargetSubnet from a dict
topology_parameters_target_subnet_from_dict = TopologyParametersTargetSubnet.from_dict(topology_parameters_target_subnet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


