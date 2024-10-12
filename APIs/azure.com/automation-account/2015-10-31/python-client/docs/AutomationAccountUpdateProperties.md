# AutomationAccountUpdateProperties

The parameters supplied to the update account properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 

## Example

```python
from openapi_client.models.automation_account_update_properties import AutomationAccountUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationAccountUpdateProperties from a JSON string
automation_account_update_properties_instance = AutomationAccountUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(AutomationAccountUpdateProperties.to_json())

# convert the object into a dict
automation_account_update_properties_dict = automation_account_update_properties_instance.to_dict()
# create an instance of AutomationAccountUpdateProperties from a dict
automation_account_update_properties_from_dict = AutomationAccountUpdateProperties.from_dict(automation_account_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


