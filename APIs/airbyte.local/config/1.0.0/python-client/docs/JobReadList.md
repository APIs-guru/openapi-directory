# JobReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[JobWithAttemptsRead]**](JobWithAttemptsRead.md) |  | 
**total_job_count** | **int** | the total count of jobs for the specified connection | 

## Example

```python
from openapi_client.models.job_read_list import JobReadList

# TODO update the JSON string below
json = "{}"
# create an instance of JobReadList from a JSON string
job_read_list_instance = JobReadList.from_json(json)
# print the JSON string representation of the object
print(JobReadList.to_json())

# convert the object into a dict
job_read_list_dict = job_read_list_instance.to_dict()
# create an instance of JobReadList from a dict
job_read_list_from_dict = JobReadList.from_dict(job_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


