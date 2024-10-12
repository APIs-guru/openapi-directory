# JobAgent

An Azure SQL job agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JobAgentProperties**](JobAgentProperties.md) |  | [optional] 
**sku** | **object** | An ARM Resource SKU. | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_agent import JobAgent

# TODO update the JSON string below
json = "{}"
# create an instance of JobAgent from a JSON string
job_agent_instance = JobAgent.from_json(json)
# print the JSON string representation of the object
print(JobAgent.to_json())

# convert the object into a dict
job_agent_dict = job_agent_instance.to_dict()
# create an instance of JobAgent from a dict
job_agent_from_dict = JobAgent.from_dict(job_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


