# Conditions

Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_context** | [**Condition**](Condition.md) |  | [optional] 
**alert_rule_id** | [**Condition**](Condition.md) |  | [optional] 
**description** | [**Condition**](Condition.md) |  | [optional] 
**monitor_condition** | [**Condition**](Condition.md) |  | [optional] 
**monitor_service** | [**Condition**](Condition.md) |  | [optional] 
**severity** | [**Condition**](Condition.md) |  | [optional] 
**target_resource_type** | [**Condition**](Condition.md) |  | [optional] 

## Example

```python
from openapi_client.models.conditions import Conditions

# TODO update the JSON string below
json = "{}"
# create an instance of Conditions from a JSON string
conditions_instance = Conditions.from_json(json)
# print the JSON string representation of the object
print(Conditions.to_json())

# convert the object into a dict
conditions_dict = conditions_instance.to_dict()
# create an instance of Conditions from a dict
conditions_from_dict = Conditions.from_dict(conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


