# AutomationAccountCreateOrUpdateParameters

The parameters supplied to the create or update automation account operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the location of the resource. | [optional] 
**name** | **str** | Gets or sets name of the resource. | [optional] 
**properties** | [**AutomationAccountCreateOrUpdateProperties**](AutomationAccountCreateOrUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.automation_account_create_or_update_parameters import AutomationAccountCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationAccountCreateOrUpdateParameters from a JSON string
automation_account_create_or_update_parameters_instance = AutomationAccountCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AutomationAccountCreateOrUpdateParameters.to_json())

# convert the object into a dict
automation_account_create_or_update_parameters_dict = automation_account_create_or_update_parameters_instance.to_dict()
# create an instance of AutomationAccountCreateOrUpdateParameters from a dict
automation_account_create_or_update_parameters_from_dict = AutomationAccountCreateOrUpdateParameters.from_dict(automation_account_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


