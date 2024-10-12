# JobWithAttemptsRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempts** | [**List[AttemptRead]**](AttemptRead.md) |  | [optional] 
**job** | [**JobRead**](JobRead.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_with_attempts_read import JobWithAttemptsRead

# TODO update the JSON string below
json = "{}"
# create an instance of JobWithAttemptsRead from a JSON string
job_with_attempts_read_instance = JobWithAttemptsRead.from_json(json)
# print the JSON string representation of the object
print(JobWithAttemptsRead.to_json())

# convert the object into a dict
job_with_attempts_read_dict = job_with_attempts_read_instance.to_dict()
# create an instance of JobWithAttemptsRead from a dict
job_with_attempts_read_from_dict = JobWithAttemptsRead.from_dict(job_with_attempts_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


