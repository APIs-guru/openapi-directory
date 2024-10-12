# JobDefinition

Job Definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JobDefinitionProperties**](JobDefinitionProperties.md) |  | 
**id** | **str** | Id of the object. | [optional] [readonly] 
**name** | **str** | Name of the object. | [optional] [readonly] 
**type** | **str** | Type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_definition import JobDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of JobDefinition from a JSON string
job_definition_instance = JobDefinition.from_json(json)
# print the JSON string representation of the object
print(JobDefinition.to_json())

# convert the object into a dict
job_definition_dict = job_definition_instance.to_dict()
# create an instance of JobDefinition from a dict
job_definition_from_dict = JobDefinition.from_dict(job_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


