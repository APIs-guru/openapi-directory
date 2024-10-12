# JobScheduleListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.job_schedule_list_by_automation_account_default_response import JobScheduleListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduleListByAutomationAccountDefaultResponse from a JSON string
job_schedule_list_by_automation_account_default_response_instance = JobScheduleListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(JobScheduleListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
job_schedule_list_by_automation_account_default_response_dict = job_schedule_list_by_automation_account_default_response_instance.to_dict()
# create an instance of JobScheduleListByAutomationAccountDefaultResponse from a dict
job_schedule_list_by_automation_account_default_response_from_dict = JobScheduleListByAutomationAccountDefaultResponse.from_dict(job_schedule_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


