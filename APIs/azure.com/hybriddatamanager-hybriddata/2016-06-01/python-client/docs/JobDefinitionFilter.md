# JobDefinitionFilter

Contains the supported job definition filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | **str** | The data source associated with the job definition | [optional] 
**last_modified** | **datetime** | The last modified date time of the data source. | [optional] 
**state** | **str** | The state of the job definition. | 

## Example

```python
from openapi_client.models.job_definition_filter import JobDefinitionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of JobDefinitionFilter from a JSON string
job_definition_filter_instance = JobDefinitionFilter.from_json(json)
# print the JSON string representation of the object
print(JobDefinitionFilter.to_json())

# convert the object into a dict
job_definition_filter_dict = job_definition_filter_instance.to_dict()
# create an instance of JobDefinitionFilter from a dict
job_definition_filter_from_dict = JobDefinitionFilter.from_dict(job_definition_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


