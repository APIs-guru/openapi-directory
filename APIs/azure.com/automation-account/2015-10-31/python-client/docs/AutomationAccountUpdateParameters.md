# AutomationAccountUpdateParameters

The parameters supplied to the update automation account operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the location of the resource. | [optional] 
**name** | **str** | Gets or sets the name of the resource. | [optional] 
**properties** | [**AutomationAccountUpdateProperties**](AutomationAccountUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.automation_account_update_parameters import AutomationAccountUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationAccountUpdateParameters from a JSON string
automation_account_update_parameters_instance = AutomationAccountUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AutomationAccountUpdateParameters.to_json())

# convert the object into a dict
automation_account_update_parameters_dict = automation_account_update_parameters_instance.to_dict()
# create an instance of AutomationAccountUpdateParameters from a dict
automation_account_update_parameters_from_dict = AutomationAccountUpdateParameters.from_dict(automation_account_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


