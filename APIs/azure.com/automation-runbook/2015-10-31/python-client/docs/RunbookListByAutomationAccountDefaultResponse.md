# RunbookListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.runbook_list_by_automation_account_default_response import RunbookListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookListByAutomationAccountDefaultResponse from a JSON string
runbook_list_by_automation_account_default_response_instance = RunbookListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(RunbookListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
runbook_list_by_automation_account_default_response_dict = runbook_list_by_automation_account_default_response_instance.to_dict()
# create an instance of RunbookListByAutomationAccountDefaultResponse from a dict
runbook_list_by_automation_account_default_response_from_dict = RunbookListByAutomationAccountDefaultResponse.from_dict(runbook_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


