# AutomationAccount

Definition of the automation account type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets or sets the etag of the resource. | [optional] 
**properties** | [**AutomationAccountProperties**](AutomationAccountProperties.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.automation_account import AutomationAccount

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationAccount from a JSON string
automation_account_instance = AutomationAccount.from_json(json)
# print the JSON string representation of the object
print(AutomationAccount.to_json())

# convert the object into a dict
automation_account_dict = automation_account_instance.to_dict()
# create an instance of AutomationAccount from a dict
automation_account_from_dict = AutomationAccount.from_dict(automation_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


