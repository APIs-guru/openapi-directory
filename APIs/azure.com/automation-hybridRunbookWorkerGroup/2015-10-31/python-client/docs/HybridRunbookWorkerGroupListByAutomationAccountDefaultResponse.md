# HybridRunbookWorkerGroupListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.hybrid_runbook_worker_group_list_by_automation_account_default_response import HybridRunbookWorkerGroupListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HybridRunbookWorkerGroupListByAutomationAccountDefaultResponse from a JSON string
hybrid_runbook_worker_group_list_by_automation_account_default_response_instance = HybridRunbookWorkerGroupListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(HybridRunbookWorkerGroupListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
hybrid_runbook_worker_group_list_by_automation_account_default_response_dict = hybrid_runbook_worker_group_list_by_automation_account_default_response_instance.to_dict()
# create an instance of HybridRunbookWorkerGroupListByAutomationAccountDefaultResponse from a dict
hybrid_runbook_worker_group_list_by_automation_account_default_response_from_dict = HybridRunbookWorkerGroupListByAutomationAccountDefaultResponse.from_dict(hybrid_runbook_worker_group_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


