# AgentFlushAggregateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_name** | **object** |  | 
**instance_time** | **object** |  | 
**logs** | **object** |  | 

## Example

```python
from openapi_client.models.agent_flush_aggregate_request import AgentFlushAggregateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AgentFlushAggregateRequest from a JSON string
agent_flush_aggregate_request_instance = AgentFlushAggregateRequest.from_json(json)
# print the JSON string representation of the object
print(AgentFlushAggregateRequest.to_json())

# convert the object into a dict
agent_flush_aggregate_request_dict = agent_flush_aggregate_request_instance.to_dict()
# create an instance of AgentFlushAggregateRequest from a dict
agent_flush_aggregate_request_from_dict = AgentFlushAggregateRequest.from_dict(agent_flush_aggregate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


