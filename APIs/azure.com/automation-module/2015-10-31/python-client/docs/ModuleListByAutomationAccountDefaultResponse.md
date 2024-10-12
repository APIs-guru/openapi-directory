# ModuleListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.module_list_by_automation_account_default_response import ModuleListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleListByAutomationAccountDefaultResponse from a JSON string
module_list_by_automation_account_default_response_instance = ModuleListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ModuleListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
module_list_by_automation_account_default_response_dict = module_list_by_automation_account_default_response_instance.to_dict()
# create an instance of ModuleListByAutomationAccountDefaultResponse from a dict
module_list_by_automation_account_default_response_from_dict = ModuleListByAutomationAccountDefaultResponse.from_dict(module_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


