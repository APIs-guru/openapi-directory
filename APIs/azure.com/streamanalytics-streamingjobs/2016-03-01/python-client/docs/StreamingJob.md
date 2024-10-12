# StreamingJob

A streaming job object, containing all information associated with the named streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StreamingJobProperties**](StreamingJobProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location. Required on PUT (CreateOrReplace) requests. | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.streaming_job import StreamingJob

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJob from a JSON string
streaming_job_instance = StreamingJob.from_json(json)
# print the JSON string representation of the object
print(StreamingJob.to_json())

# convert the object into a dict
streaming_job_dict = streaming_job_instance.to_dict()
# create an instance of StreamingJob from a dict
streaming_job_from_dict = StreamingJob.from_dict(streaming_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


