# JobTerminateParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminate_reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.job_terminate_parameter import JobTerminateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobTerminateParameter from a JSON string
job_terminate_parameter_instance = JobTerminateParameter.from_json(json)
# print the JSON string representation of the object
print(JobTerminateParameter.to_json())

# convert the object into a dict
job_terminate_parameter_dict = job_terminate_parameter_instance.to_dict()
# create an instance of JobTerminateParameter from a dict
job_terminate_parameter_from_dict = JobTerminateParameter.from_dict(job_terminate_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


