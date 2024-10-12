# JobAgentListResult

A list of Azure SQL job agents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[JobAgent]**](JobAgent.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_agent_list_result import JobAgentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobAgentListResult from a JSON string
job_agent_list_result_instance = JobAgentListResult.from_json(json)
# print the JSON string representation of the object
print(JobAgentListResult.to_json())

# convert the object into a dict
job_agent_list_result_dict = job_agent_list_result_instance.to_dict()
# create an instance of JobAgentListResult from a dict
job_agent_list_result_from_dict = JobAgentListResult.from_dict(job_agent_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


