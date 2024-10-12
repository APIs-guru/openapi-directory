# JobRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_id** | **str** |  | 
**config_type** | [**JobConfigType**](JobConfigType.md) |  | 
**created_at** | **int** |  | 
**id** | **int** |  | 
**reset_config** | [**ResetConfig**](ResetConfig.md) |  | [optional] 
**started_at** | **int** |  | [optional] 
**status** | [**JobStatus**](JobStatus.md) |  | 
**updated_at** | **int** |  | 

## Example

```python
from openapi_client.models.job_read import JobRead

# TODO update the JSON string below
json = "{}"
# create an instance of JobRead from a JSON string
job_read_instance = JobRead.from_json(json)
# print the JSON string representation of the object
print(JobRead.to_json())

# convert the object into a dict
job_read_dict = job_read_instance.to_dict()
# create an instance of JobRead from a dict
job_read_from_dict = JobRead.from_dict(job_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


