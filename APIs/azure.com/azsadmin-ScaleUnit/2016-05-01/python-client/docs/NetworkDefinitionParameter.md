# NetworkDefinitionParameter

A definition of the network received from a new cluster operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subnet** | **List[str]** | The subnet IP mask in the example format 10.0.0.0/25. | [optional] 
**vlan_id** | **List[str]** | The Vlan ID of the subnet. | [optional] 

## Example

```python
from openapi_client.models.network_definition_parameter import NetworkDefinitionParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkDefinitionParameter from a JSON string
network_definition_parameter_instance = NetworkDefinitionParameter.from_json(json)
# print the JSON string representation of the object
print(NetworkDefinitionParameter.to_json())

# convert the object into a dict
network_definition_parameter_dict = network_definition_parameter_instance.to_dict()
# create an instance of NetworkDefinitionParameter from a dict
network_definition_parameter_from_dict = NetworkDefinitionParameter.from_dict(network_definition_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


