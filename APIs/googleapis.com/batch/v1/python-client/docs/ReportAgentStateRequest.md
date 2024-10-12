# ReportAgentStateRequest

Request to report agent's state. The Request itself implies the agent is healthy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_info** | [**AgentInfo**](AgentInfo.md) |  | [optional] 
**agent_timing_info** | [**AgentTimingInfo**](AgentTimingInfo.md) |  | [optional] 
**metadata** | [**AgentMetadata**](AgentMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_agent_state_request import ReportAgentStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportAgentStateRequest from a JSON string
report_agent_state_request_instance = ReportAgentStateRequest.from_json(json)
# print the JSON string representation of the object
print(ReportAgentStateRequest.to_json())

# convert the object into a dict
report_agent_state_request_dict = report_agent_state_request_instance.to_dict()
# create an instance of ReportAgentStateRequest from a dict
report_agent_state_request_from_dict = ReportAgentStateRequest.from_dict(report_agent_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


