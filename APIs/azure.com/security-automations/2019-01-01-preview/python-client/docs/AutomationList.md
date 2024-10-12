# AutomationList

List of security automations response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[Automation]**](Automation.md) | The list of security automations under the given scope. | 

## Example

```python
from openapi_client.models.automation_list import AutomationList

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationList from a JSON string
automation_list_instance = AutomationList.from_json(json)
# print the JSON string representation of the object
print(AutomationList.to_json())

# convert the object into a dict
automation_list_dict = automation_list_instance.to_dict()
# create an instance of AutomationList from a dict
automation_list_from_dict = AutomationList.from_dict(automation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


