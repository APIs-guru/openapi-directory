# JobListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.job_list_by_automation_account_default_response import JobListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JobListByAutomationAccountDefaultResponse from a JSON string
job_list_by_automation_account_default_response_instance = JobListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(JobListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
job_list_by_automation_account_default_response_dict = job_list_by_automation_account_default_response_instance.to_dict()
# create an instance of JobListByAutomationAccountDefaultResponse from a dict
job_list_by_automation_account_default_response_from_dict = JobListByAutomationAccountDefaultResponse.from_dict(job_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


