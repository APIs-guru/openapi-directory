# Agent

SimplyRETS Agent Api

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**ContactInformation**](ContactInformation.md) |  | [optional] 
**first_name** | **str** | Agent first name | [optional] 
**id** | **str** | Well known Agent MLS number or id. | [optional] 
**last_name** | **str** | Agent last name | [optional] 

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


