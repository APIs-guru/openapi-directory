# Simulation

Attack path simulation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time simulation was created | [optional] [readonly] 
**name** | **str** | Full resource name of the Simulation: organizations/123/simulations/456 | [optional] 
**resource_value_configs_metadata** | [**List[ResourceValueConfigMetadata]**](ResourceValueConfigMetadata.md) | Resource value configurations&#39; metadata used in this simulation. Maximum of 100. | [optional] 

## Example

```python
from openapi_client.models.simulation import Simulation

# TODO update the JSON string below
json = "{}"
# create an instance of Simulation from a JSON string
simulation_instance = Simulation.from_json(json)
# print the JSON string representation of the object
print(Simulation.to_json())

# convert the object into a dict
simulation_dict = simulation_instance.to_dict()
# create an instance of Simulation from a dict
simulation_from_dict = Simulation.from_dict(simulation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


