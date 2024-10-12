# JobStatisticsVertex

The detailed information for a vertex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_read** | **int** | The amount of data read of the vertex, in bytes. | [optional] [readonly] 
**execution_time** | **str** | The amount of execution time of the vertex. | [optional] [readonly] 
**name** | **str** | The name of the vertex. | [optional] [readonly] 
**peak_mem_usage** | **int** | The amount of peak memory usage of the vertex, in bytes. | [optional] [readonly] 
**vertex_id** | **str** | The id of the vertex. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_statistics_vertex import JobStatisticsVertex

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatisticsVertex from a JSON string
job_statistics_vertex_instance = JobStatisticsVertex.from_json(json)
# print the JSON string representation of the object
print(JobStatisticsVertex.to_json())

# convert the object into a dict
job_statistics_vertex_dict = job_statistics_vertex_instance.to_dict()
# create an instance of JobStatisticsVertex from a dict
job_statistics_vertex_from_dict = JobStatisticsVertex.from_dict(job_statistics_vertex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


