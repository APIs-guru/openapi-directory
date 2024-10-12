# AgentFlushRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_name** | **object** |  | 
**instance_time** | **int** |  | 
**logs** | **List[str]** |  | 

## Example

```python
from openapi_client.models.agent_flush_request import AgentFlushRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AgentFlushRequest from a JSON string
agent_flush_request_instance = AgentFlushRequest.from_json(json)
# print the JSON string representation of the object
print(AgentFlushRequest.to_json())

# convert the object into a dict
agent_flush_request_dict = agent_flush_request_instance.to_dict()
# create an instance of AgentFlushRequest from a dict
agent_flush_request_from_dict = AgentFlushRequest.from_dict(agent_flush_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


