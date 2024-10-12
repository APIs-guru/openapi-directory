# JobInfoRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempts** | [**List[AttemptInfoRead]**](AttemptInfoRead.md) |  | 
**job** | [**JobRead**](JobRead.md) |  | 

## Example

```python
from openapi_client.models.job_info_read import JobInfoRead

# TODO update the JSON string below
json = "{}"
# create an instance of JobInfoRead from a JSON string
job_info_read_instance = JobInfoRead.from_json(json)
# print the JSON string representation of the object
print(JobInfoRead.to_json())

# convert the object into a dict
job_info_read_dict = job_info_read_instance.to_dict()
# create an instance of JobInfoRead from a dict
job_info_read_from_dict = JobInfoRead.from_dict(job_info_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


