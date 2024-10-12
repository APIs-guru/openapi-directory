# Agent

The agent details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | The agent version. | [optional] 
**created_date** | **datetime** | The date and time, in UTC, when the agent was created. | [optional] 
**credential** | **object** | The agent credential details. | [optional] 
**key** | **str** |  The connector hash key. | [optional] 
**machine_id** | **str** | The machine Id. | [optional] 
**machine_name** | **str** | The machine name. | [optional] 
**tenant_id** | **str** | The tenant Id. | [optional] 

## Example

```python
from openapi_client.models.agent import Agent

# TODO update the JSON string below
json = "{}"
# create an instance of Agent from a JSON string
agent_instance = Agent.from_json(json)
# print the JSON string representation of the object
print(Agent.to_json())

# convert the object into a dict
agent_dict = agent_instance.to_dict()
# create an instance of Agent from a dict
agent_from_dict = Agent.from_dict(agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


