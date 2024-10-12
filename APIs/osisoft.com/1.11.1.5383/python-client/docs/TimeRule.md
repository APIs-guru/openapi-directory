# TimeRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_string** | **str** |  | [optional] 
**config_string_stored** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**display_string** | **str** |  | [optional] 
**editor_type** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_configured** | **bool** |  | [optional] 
**is_initializing** | **bool** |  | [optional] 
**links** | [**TimeRuleLinks**](TimeRuleLinks.md) |  | [optional] 
**merge_duplicated_items** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**plug_in_name** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.time_rule import TimeRule

# TODO update the JSON string below
json = "{}"
# create an instance of TimeRule from a JSON string
time_rule_instance = TimeRule.from_json(json)
# print the JSON string representation of the object
print(TimeRule.to_json())

# convert the object into a dict
time_rule_dict = time_rule_instance.to_dict()
# create an instance of TimeRule from a dict
time_rule_from_dict = TimeRule.from_dict(time_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


