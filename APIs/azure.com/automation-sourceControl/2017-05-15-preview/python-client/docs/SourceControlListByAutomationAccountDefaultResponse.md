# SourceControlListByAutomationAccountDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.source_control_list_by_automation_account_default_response import SourceControlListByAutomationAccountDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlListByAutomationAccountDefaultResponse from a JSON string
source_control_list_by_automation_account_default_response_instance = SourceControlListByAutomationAccountDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(SourceControlListByAutomationAccountDefaultResponse.to_json())

# convert the object into a dict
source_control_list_by_automation_account_default_response_dict = source_control_list_by_automation_account_default_response_instance.to_dict()
# create an instance of SourceControlListByAutomationAccountDefaultResponse from a dict
source_control_list_by_automation_account_default_response_from_dict = SourceControlListByAutomationAccountDefaultResponse.from_dict(source_control_list_by_automation_account_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


