# JobResponseListResult

The JSON-serialized array of JobResponse objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | [**List[JobResponse]**](JobResponse.md) | The array of JobResponse objects. | [optional] 

## Example

```python
from openapi_client.models.job_response_list_result import JobResponseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobResponseListResult from a JSON string
job_response_list_result_instance = JobResponseListResult.from_json(json)
# print the JSON string representation of the object
print(JobResponseListResult.to_json())

# convert the object into a dict
job_response_list_result_dict = job_response_list_result_instance.to_dict()
# create an instance of JobResponseListResult from a dict
job_response_list_result_from_dict = JobResponseListResult.from_dict(job_response_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


