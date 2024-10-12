# DscCompilationJob

Definition of the Dsc Compilation job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DscCompilationJobProperties**](DscCompilationJobProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dsc_compilation_job import DscCompilationJob

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJob from a JSON string
dsc_compilation_job_instance = DscCompilationJob.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJob.to_json())

# convert the object into a dict
dsc_compilation_job_dict = dsc_compilation_job_instance.to_dict()
# create an instance of DscCompilationJob from a dict
dsc_compilation_job_from_dict = DscCompilationJob.from_dict(dsc_compilation_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


