# AutomationAccountProperties

Definition of the account property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets the creation time. | [optional] [readonly] 
**description** | **str** | Gets or sets the description. | [optional] 
**last_modified_by** | **str** | Gets or sets the last modified by. | [optional] 
**last_modified_time** | **datetime** | Gets the last modified time. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**state** | **str** | Gets status of account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.automation_account_properties import AutomationAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationAccountProperties from a JSON string
automation_account_properties_instance = AutomationAccountProperties.from_json(json)
# print the JSON string representation of the object
print(AutomationAccountProperties.to_json())

# convert the object into a dict
automation_account_properties_dict = automation_account_properties_instance.to_dict()
# create an instance of AutomationAccountProperties from a dict
automation_account_properties_from_dict = AutomationAccountProperties.from_dict(automation_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


