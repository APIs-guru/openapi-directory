# JobHistoryDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets the job history identifier. | [optional] [readonly] 
**name** | **str** | Gets the job history name. | [optional] [readonly] 
**properties** | [**JobHistoryDefinitionProperties**](JobHistoryDefinitionProperties.md) |  | [optional] 
**type** | **str** | Gets the job history resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_history_definition import JobHistoryDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of JobHistoryDefinition from a JSON string
job_history_definition_instance = JobHistoryDefinition.from_json(json)
# print the JSON string representation of the object
print(JobHistoryDefinition.to_json())

# convert the object into a dict
job_history_definition_dict = job_history_definition_instance.to_dict()
# create an instance of JobHistoryDefinition from a dict
job_history_definition_from_dict = JobHistoryDefinition.from_dict(job_history_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


