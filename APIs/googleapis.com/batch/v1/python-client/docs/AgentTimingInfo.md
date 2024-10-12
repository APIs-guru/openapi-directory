# AgentTimingInfo

VM timing information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_startup_time** | **str** | Agent startup time | [optional] 
**boot_time** | **str** | Boot timestamp of the VM OS | [optional] 
**script_startup_time** | **str** | Startup time of the Batch VM script. | [optional] 

## Example

```python
from openapi_client.models.agent_timing_info import AgentTimingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AgentTimingInfo from a JSON string
agent_timing_info_instance = AgentTimingInfo.from_json(json)
# print the JSON string representation of the object
print(AgentTimingInfo.to_json())

# convert the object into a dict
agent_timing_info_dict = agent_timing_info_instance.to_dict()
# create an instance of AgentTimingInfo from a dict
agent_timing_info_from_dict = AgentTimingInfo.from_dict(agent_timing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


