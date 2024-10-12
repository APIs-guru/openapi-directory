# AgentConfiguration

Describes the configuration of the Dependency Agent installed on a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** | Health Service Agent unique identifier. | 
**clock_granularity** | **int** | Machine clock granularity in milliseconds. | [optional] 
**dependency_agent_id** | **str** | Dependency Agent unique identifier. | [optional] 
**dependency_agent_revision** | **str** | Dependency Agent revision number. | [optional] 
**dependency_agent_version** | **str** | Dependency Agent version number. | [optional] 
**reboot_status** | [**MachineRebootStatus**](MachineRebootStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.agent_configuration import AgentConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AgentConfiguration from a JSON string
agent_configuration_instance = AgentConfiguration.from_json(json)
# print the JSON string representation of the object
print(AgentConfiguration.to_json())

# convert the object into a dict
agent_configuration_dict = agent_configuration_instance.to_dict()
# create an instance of AgentConfiguration from a dict
agent_configuration_from_dict = AgentConfiguration.from_dict(agent_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


