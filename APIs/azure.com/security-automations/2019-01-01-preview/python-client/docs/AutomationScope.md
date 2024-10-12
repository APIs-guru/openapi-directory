# AutomationScope

A single automation scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The resources scope description. | [optional] 
**scope_path** | **str** | The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs). | [optional] 

## Example

```python
from openapi_client.models.automation_scope import AutomationScope

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationScope from a JSON string
automation_scope_instance = AutomationScope.from_json(json)
# print the JSON string representation of the object
print(AutomationScope.to_json())

# convert the object into a dict
automation_scope_dict = automation_scope_instance.to_dict()
# create an instance of AutomationScope from a dict
automation_scope_from_dict = AutomationScope.from_dict(automation_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


