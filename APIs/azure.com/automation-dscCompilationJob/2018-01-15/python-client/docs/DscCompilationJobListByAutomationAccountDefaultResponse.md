# DscCompilationJobListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.dsc_compilation_job_list_by_automation_account_default_response import DscCompilationJobListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJobListByAutomationAccountDefaultResponse from a JSON string
dsc_compilation_job_list_by_automation_account_default_response_instance = DscCompilationJobListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJobListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
dsc_compilation_job_list_by_automation_account_default_response_dict = dsc_compilation_job_list_by_automation_account_default_response_instance.to_dict()
# create an instance of DscCompilationJobListByAutomationAccountDefaultResponse from a dict
dsc_compilation_job_list_by_automation_account_default_response_from_dict = DscCompilationJobListByAutomationAccountDefaultResponse.from_dict(dsc_compilation_job_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


