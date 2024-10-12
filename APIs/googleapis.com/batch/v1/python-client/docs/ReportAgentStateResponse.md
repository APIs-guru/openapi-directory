# ReportAgentStateResponse

Response to ReportAgentStateRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_report_interval** | **str** | Default report interval override | [optional] 
**min_report_interval** | **str** | Minimum report interval override | [optional] 
**tasks** | [**List[AgentTask]**](AgentTask.md) | Tasks assigned to the agent | [optional] 
**use_batch_monitored_resource** | **bool** | If true, the cloud logging for batch agent will use batch.googleapis.com/Job as monitored resource for Batch job related logging. | [optional] 

## Example

```python
from openapi_client.models.report_agent_state_response import ReportAgentStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReportAgentStateResponse from a JSON string
report_agent_state_response_instance = ReportAgentStateResponse.from_json(json)
# print the JSON string representation of the object
print(ReportAgentStateResponse.to_json())

# convert the object into a dict
report_agent_state_response_dict = report_agent_state_response_instance.to_dict()
# create an instance of ReportAgentStateResponse from a dict
report_agent_state_response_from_dict = ReportAgentStateResponse.from_dict(report_agent_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


