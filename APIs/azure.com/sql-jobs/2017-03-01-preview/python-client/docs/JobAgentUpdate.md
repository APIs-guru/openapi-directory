# JobAgentUpdate

An update to an Azure SQL job agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.job_agent_update import JobAgentUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of JobAgentUpdate from a JSON string
job_agent_update_instance = JobAgentUpdate.from_json(json)
# print the JSON string representation of the object
print(JobAgentUpdate.to_json())

# convert the object into a dict
job_agent_update_dict = job_agent_update_instance.to_dict()
# create an instance of JobAgentUpdate from a dict
job_agent_update_from_dict = JobAgentUpdate.from_dict(job_agent_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


