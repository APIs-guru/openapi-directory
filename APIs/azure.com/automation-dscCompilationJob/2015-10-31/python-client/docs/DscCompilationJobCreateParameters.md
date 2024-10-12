# DscCompilationJobCreateParameters

The parameters supplied to the create compilation job operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the location of the resource. | [optional] 
**name** | **str** | Gets or sets name of the resource. | [optional] 
**properties** | [**DscCompilationJobCreateProperties**](DscCompilationJobCreateProperties.md) |  | 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.dsc_compilation_job_create_parameters import DscCompilationJobCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJobCreateParameters from a JSON string
dsc_compilation_job_create_parameters_instance = DscCompilationJobCreateParameters.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJobCreateParameters.to_json())

# convert the object into a dict
dsc_compilation_job_create_parameters_dict = dsc_compilation_job_create_parameters_instance.to_dict()
# create an instance of DscCompilationJobCreateParameters from a dict
dsc_compilation_job_create_parameters_from_dict = DscCompilationJobCreateParameters.from_dict(dsc_compilation_job_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


