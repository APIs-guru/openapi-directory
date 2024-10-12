# AutomationAccountCreateOrUpdateProperties

The parameters supplied to the create or update account properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 

## Example

```python
from openapi_client.models.automation_account_create_or_update_properties import AutomationAccountCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationAccountCreateOrUpdateProperties from a JSON string
automation_account_create_or_update_properties_instance = AutomationAccountCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(AutomationAccountCreateOrUpdateProperties.to_json())

# convert the object into a dict
automation_account_create_or_update_properties_dict = automation_account_create_or_update_properties_instance.to_dict()
# create an instance of AutomationAccountCreateOrUpdateProperties from a dict
automation_account_create_or_update_properties_from_dict = AutomationAccountCreateOrUpdateProperties.from_dict(automation_account_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


