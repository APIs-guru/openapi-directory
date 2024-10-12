# ListAgentPoolsResponse

Response from ListAgentPools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_pools** | [**List[AgentPool]**](AgentPool.md) | A list of agent pools. | [optional] 
**next_page_token** | **str** | The list next page token. | [optional] 

## Example

```python
from openapi_client.models.list_agent_pools_response import ListAgentPoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAgentPoolsResponse from a JSON string
list_agent_pools_response_instance = ListAgentPoolsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAgentPoolsResponse.to_json())

# convert the object into a dict
list_agent_pools_response_dict = list_agent_pools_response_instance.to_dict()
# create an instance of ListAgentPoolsResponse from a dict
list_agent_pools_response_from_dict = ListAgentPoolsResponse.from_dict(list_agent_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


