# JobAgentProperties

Properties of a job agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_id** | **str** | Resource ID of the database to store job metadata in. | 
**state** | **str** | The state of the job agent. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_agent_properties import JobAgentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobAgentProperties from a JSON string
job_agent_properties_instance = JobAgentProperties.from_json(json)
# print the JSON string representation of the object
print(JobAgentProperties.to_json())

# convert the object into a dict
job_agent_properties_dict = job_agent_properties_instance.to_dict()
# create an instance of JobAgentProperties from a dict
job_agent_properties_from_dict = JobAgentProperties.from_dict(job_agent_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


