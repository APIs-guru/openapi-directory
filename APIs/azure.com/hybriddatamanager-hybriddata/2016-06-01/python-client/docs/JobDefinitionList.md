# JobDefinitionList

Job Definition Collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of job definitions. | [optional] 
**value** | [**List[JobDefinition]**](JobDefinition.md) | List of job definitions. | [optional] 

## Example

```python
from openapi_client.models.job_definition_list import JobDefinitionList

# TODO update the JSON string below
json = "{}"
# create an instance of JobDefinitionList from a JSON string
job_definition_list_instance = JobDefinitionList.from_json(json)
# print the JSON string representation of the object
print(JobDefinitionList.to_json())

# convert the object into a dict
job_definition_list_dict = job_definition_list_instance.to_dict()
# create an instance of JobDefinitionList from a dict
job_definition_list_from_dict = JobDefinitionList.from_dict(job_definition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


