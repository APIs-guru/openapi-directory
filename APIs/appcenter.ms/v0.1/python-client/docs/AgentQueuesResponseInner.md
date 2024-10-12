# AgentQueuesResponseInner

Agent queue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.agent_queues_response_inner import AgentQueuesResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of AgentQueuesResponseInner from a JSON string
agent_queues_response_inner_instance = AgentQueuesResponseInner.from_json(json)
# print the JSON string representation of the object
print(AgentQueuesResponseInner.to_json())

# convert the object into a dict
agent_queues_response_inner_dict = agent_queues_response_inner_instance.to_dict()
# create an instance of AgentQueuesResponseInner from a dict
agent_queues_response_inner_from_dict = AgentQueuesResponseInner.from_dict(agent_queues_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


