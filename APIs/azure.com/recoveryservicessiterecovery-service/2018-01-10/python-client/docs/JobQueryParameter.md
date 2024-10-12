# JobQueryParameter

Query parameter to enumerate jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_object_types** | **str** | The type of objects. | [optional] 
**end_time** | **str** | Date time to get jobs up to. | [optional] 
**fabric_id** | **str** | The Id of the fabric to search jobs under. | [optional] 
**job_status** | **str** | The states of the job to be filtered can be in. | [optional] 
**start_time** | **str** | Date time to get jobs from. | [optional] 

## Example

```python
from openapi_client.models.job_query_parameter import JobQueryParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobQueryParameter from a JSON string
job_query_parameter_instance = JobQueryParameter.from_json(json)
# print the JSON string representation of the object
print(JobQueryParameter.to_json())

# convert the object into a dict
job_query_parameter_dict = job_query_parameter_instance.to_dict()
# create an instance of JobQueryParameter from a dict
job_query_parameter_from_dict = JobQueryParameter.from_dict(job_query_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


