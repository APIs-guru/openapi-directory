# BuildSystemSharedDTOAgent

A DTO for an IAgent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **int** | The id of the Agent | [optional] 
**keep_alive_interval** | **int** | The &#39;Heartbeat Interval&#39; used by the Build Agent. | 
**machine_name** | **str** | The machine name of the computer the agent is running on | 
**status** | [**BuildSystemSharedDTOAgentStatus**](BuildSystemSharedDTOAgentStatus.md) |  | 
**step_configurations** | [**List[BuildSystemSharedDTOStepConfiguration]**](BuildSystemSharedDTOStepConfiguration.md) | The agent&#39;s step configurations | [optional] [readonly] 
**user_id** | **int** | The UserID of the Agent | 

## Example

```python
from openapi_client.models.build_system_shared_dto_agent import BuildSystemSharedDTOAgent

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOAgent from a JSON string
build_system_shared_dto_agent_instance = BuildSystemSharedDTOAgent.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOAgent.to_json())

# convert the object into a dict
build_system_shared_dto_agent_dict = build_system_shared_dto_agent_instance.to_dict()
# create an instance of BuildSystemSharedDTOAgent from a dict
build_system_shared_dto_agent_from_dict = BuildSystemSharedDTOAgent.from_dict(build_system_shared_dto_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


