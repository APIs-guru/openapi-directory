# JobListRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_id** | **str** |  | 
**config_types** | [**List[JobConfigType]**](JobConfigType.md) |  | 
**including_job_id** | **int** |  | [optional] 
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_list_request_body import JobListRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of JobListRequestBody from a JSON string
job_list_request_body_instance = JobListRequestBody.from_json(json)
# print the JSON string representation of the object
print(JobListRequestBody.to_json())

# convert the object into a dict
job_list_request_body_dict = job_list_request_body_instance.to_dict()
# create an instance of JobListRequestBody from a dict
job_list_request_body_from_dict = JobListRequestBody.from_dict(job_list_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


