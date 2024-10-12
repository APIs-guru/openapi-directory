# JobDebugInfoRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempts** | [**List[AttemptInfoRead]**](AttemptInfoRead.md) |  | 
**job** | [**JobDebugRead**](JobDebugRead.md) |  | 
**workflow_state** | [**WorkflowStateRead**](WorkflowStateRead.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_debug_info_read import JobDebugInfoRead

# TODO update the JSON string below
json = "{}"
# create an instance of JobDebugInfoRead from a JSON string
job_debug_info_read_instance = JobDebugInfoRead.from_json(json)
# print the JSON string representation of the object
print(JobDebugInfoRead.to_json())

# convert the object into a dict
job_debug_info_read_dict = job_debug_info_read_instance.to_dict()
# create an instance of JobDebugInfoRead from a dict
job_debug_info_read_from_dict = JobDebugInfoRead.from_dict(job_debug_info_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


