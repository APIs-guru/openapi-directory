# StreamingJobListResult

Object containing a list of streaming jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[StreamingJob]**](StreamingJob.md) | A list of streaming jobs. Populated by a &#39;List&#39; operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.streaming_job_list_result import StreamingJobListResult

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobListResult from a JSON string
streaming_job_list_result_instance = StreamingJobListResult.from_json(json)
# print the JSON string representation of the object
print(StreamingJobListResult.to_json())

# convert the object into a dict
streaming_job_list_result_dict = streaming_job_list_result_instance.to_dict()
# create an instance of StreamingJobListResult from a dict
streaming_job_list_result_from_dict = StreamingJobListResult.from_dict(streaming_job_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


