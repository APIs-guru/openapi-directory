# BuildAgentQueuesResponseInner

Queue configured in build definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_definition** | **str** | Name of the build definition | [optional] 
**name** | **str** | Name of the queue | [optional] 

## Example

```python
from openapi_client.models.build_agent_queues_response_inner import BuildAgentQueuesResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildAgentQueuesResponseInner from a JSON string
build_agent_queues_response_inner_instance = BuildAgentQueuesResponseInner.from_json(json)
# print the JSON string representation of the object
print(BuildAgentQueuesResponseInner.to_json())

# convert the object into a dict
build_agent_queues_response_inner_dict = build_agent_queues_response_inner_instance.to_dict()
# create an instance of BuildAgentQueuesResponseInner from a dict
build_agent_queues_response_inner_from_dict = BuildAgentQueuesResponseInner.from_dict(build_agent_queues_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


