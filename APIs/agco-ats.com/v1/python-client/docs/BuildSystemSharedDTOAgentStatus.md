# BuildSystemSharedDTOAgentStatus

A DTO for an IAgentStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_status_update** | **datetime** | ReadOnly. The UTC date and time of the last status update | [optional] 
**online** | **bool** | Indicates if the agent is online | 

## Example

```python
from openapi_client.models.build_system_shared_dto_agent_status import BuildSystemSharedDTOAgentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOAgentStatus from a JSON string
build_system_shared_dto_agent_status_instance = BuildSystemSharedDTOAgentStatus.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOAgentStatus.to_json())

# convert the object into a dict
build_system_shared_dto_agent_status_dict = build_system_shared_dto_agent_status_instance.to_dict()
# create an instance of BuildSystemSharedDTOAgentStatus from a dict
build_system_shared_dto_agent_status_from_dict = BuildSystemSharedDTOAgentStatus.from_dict(build_system_shared_dto_agent_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


