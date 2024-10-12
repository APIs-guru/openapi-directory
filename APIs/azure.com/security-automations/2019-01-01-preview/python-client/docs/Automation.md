# Automation

The security automation resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AutomationProperties**](AutomationProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**location** | **str** | Location where the resource is stored | [optional] [readonly] 
**kind** | **str** | Kind of the resource | [optional] 
**etag** | **str** | Entity tag is used for comparing two or more entities from the same requested resource. | [optional] 
**tags** | **Dict[str, str]** | A list of key value pairs that describe the resource. | [optional] 

## Example

```python
from openapi_client.models.automation import Automation

# TODO update the JSON string below
json = "{}"
# create an instance of Automation from a JSON string
automation_instance = Automation.from_json(json)
# print the JSON string representation of the object
print(Automation.to_json())

# convert the object into a dict
automation_dict = automation_instance.to_dict()
# create an instance of Automation from a dict
automation_from_dict = Automation.from_dict(automation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


