# DscCompilationJobListResult

The response model for the list job operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[DscCompilationJob]**](DscCompilationJob.md) | Gets or sets a list of Dsc Compilation jobs. | [optional] 

## Example

```python
from openapi_client.models.dsc_compilation_job_list_result import DscCompilationJobListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJobListResult from a JSON string
dsc_compilation_job_list_result_instance = DscCompilationJobListResult.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJobListResult.to_json())

# convert the object into a dict
dsc_compilation_job_list_result_dict = dsc_compilation_job_list_result_instance.to_dict()
# create an instance of DscCompilationJobListResult from a dict
dsc_compilation_job_list_result_from_dict = DscCompilationJobListResult.from_dict(dsc_compilation_job_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


