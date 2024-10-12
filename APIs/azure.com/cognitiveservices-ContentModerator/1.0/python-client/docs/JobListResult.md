# JobListResult

The list of job ids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **List[str]** | The job id. | [optional] 

## Example

```python
from openapi_client.models.job_list_result import JobListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobListResult from a JSON string
job_list_result_instance = JobListResult.from_json(json)
# print the JSON string representation of the object
print(JobListResult.to_json())

# convert the object into a dict
job_list_result_dict = job_list_result_instance.to_dict()
# create an instance of JobListResult from a dict
job_list_result_from_dict = JobListResult.from_dict(job_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


