# AutomationResourceSelector

AutomationResourceSelector contains the information to select the resources to which an Automation is going to be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targets** | [**List[TargetAttribute]**](TargetAttribute.md) | Contains attributes about a target. | [optional] 

## Example

```python
from openapi_client.models.automation_resource_selector import AutomationResourceSelector

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationResourceSelector from a JSON string
automation_resource_selector_instance = AutomationResourceSelector.from_json(json)
# print the JSON string representation of the object
print(AutomationResourceSelector.to_json())

# convert the object into a dict
automation_resource_selector_dict = automation_resource_selector_instance.to_dict()
# create an instance of AutomationResourceSelector from a dict
automation_resource_selector_from_dict = AutomationResourceSelector.from_dict(automation_resource_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


