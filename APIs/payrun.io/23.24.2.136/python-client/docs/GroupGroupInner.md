# GroupGroupInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_name** | **str** | The entity groups&#39; group name | [optional] 
**item_name** | **str** | The entity groups&#39; item name | [optional] 
**loop_expression** | **str** | The entity groups&#39; loop expression | [optional] 
**predicate** | **str** | The entity groups&#39; predicate | [optional] 
**selector** | **str** | The entity groups&#39; selector | [optional] 
**unique_key_variable** | **str** | The entity groups&#39; unique key variable | [optional] 
**condition** | [**List[ConditionInner]**](ConditionInner.md) | The entity groups&#39; conditions | [optional] 
**filter** | [**List[FilterInner]**](FilterInner.md) | The entity groups&#39; filters | [optional] 
**order** | [**List[OrderInner]**](OrderInner.md) | The entity groups&#39; ordering | [optional] 
**output** | [**List[OutputInner]**](OutputInner.md) | The entity groups&#39; outputs | [optional] 

## Example

```python
from openapi_client.models.group_group_inner import GroupGroupInner

# TODO update the JSON string below
json = "{}"
# create an instance of GroupGroupInner from a JSON string
group_group_inner_instance = GroupGroupInner.from_json(json)
# print the JSON string representation of the object
print(GroupGroupInner.to_json())

# convert the object into a dict
group_group_inner_dict = group_group_inner_instance.to_dict()
# create an instance of GroupGroupInner from a dict
group_group_inner_from_dict = GroupGroupInner.from_dict(group_group_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


