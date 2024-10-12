# AgentEnvironment

AgentEnvironment is the Environment representation between Agent and CLH communication. The environment is used in both task level and agent level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_variables** | [**AgentKMSEnvMap**](AgentKMSEnvMap.md) |  | [optional] 
**secret_variables** | **Dict[str, str]** | A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable. | [optional] 
**variables** | **Dict[str, str]** | A map of environment variable names to values. | [optional] 

## Example

```python
from openapi_client.models.agent_environment import AgentEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of AgentEnvironment from a JSON string
agent_environment_instance = AgentEnvironment.from_json(json)
# print the JSON string representation of the object
print(AgentEnvironment.to_json())

# convert the object into a dict
agent_environment_dict = agent_environment_instance.to_dict()
# create an instance of AgentEnvironment from a dict
agent_environment_from_dict = AgentEnvironment.from_dict(agent_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


