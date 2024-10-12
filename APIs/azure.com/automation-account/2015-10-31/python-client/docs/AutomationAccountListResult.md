# AutomationAccountListResult

The response model for the list account operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[AutomationAccount]**](AutomationAccount.md) | Gets or sets list of accounts. | [optional] 

## Example

```python
from openapi_client.models.automation_account_list_result import AutomationAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationAccountListResult from a JSON string
automation_account_list_result_instance = AutomationAccountListResult.from_json(json)
# print the JSON string representation of the object
print(AutomationAccountListResult.to_json())

# convert the object into a dict
automation_account_list_result_dict = automation_account_list_result_instance.to_dict()
# create an instance of AutomationAccountListResult from a dict
automation_account_list_result_from_dict = AutomationAccountListResult.from_dict(automation_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


