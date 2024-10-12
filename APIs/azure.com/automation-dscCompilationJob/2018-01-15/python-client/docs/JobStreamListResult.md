# JobStreamListResult

The response model for the list job stream operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[JobStream]**](JobStream.md) | A list of job streams. | [optional] 

## Example

```python
from openapi_client.models.job_stream_list_result import JobStreamListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobStreamListResult from a JSON string
job_stream_list_result_instance = JobStreamListResult.from_json(json)
# print the JSON string representation of the object
print(JobStreamListResult.to_json())

# convert the object into a dict
job_stream_list_result_dict = job_stream_list_result_instance.to_dict()
# create an instance of JobStreamListResult from a dict
job_stream_list_result_from_dict = JobStreamListResult.from_dict(job_stream_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


