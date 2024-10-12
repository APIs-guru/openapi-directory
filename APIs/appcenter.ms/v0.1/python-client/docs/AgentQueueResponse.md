# AgentQueueResponse

Agent queue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.agent_queue_response import AgentQueueResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AgentQueueResponse from a JSON string
agent_queue_response_instance = AgentQueueResponse.from_json(json)
# print the JSON string representation of the object
print(AgentQueueResponse.to_json())

# convert the object into a dict
agent_queue_response_dict = agent_queue_response_instance.to_dict()
# create an instance of AgentQueueResponse from a dict
agent_queue_response_from_dict = AgentQueueResponse.from_dict(agent_queue_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


