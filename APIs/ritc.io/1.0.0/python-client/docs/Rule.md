# Rule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_ids** | **str** | Rule description | [optional] 
**description** | **str** | Rule description | [optional] 
**name** | **str** | Rule name | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**trigger_ids** | **str** | Rule description | [optional] 

## Example

```python
from openapi_client.models.rule import Rule

# TODO update the JSON string below
json = "{}"
# create an instance of Rule from a JSON string
rule_instance = Rule.from_json(json)
# print the JSON string representation of the object
print(Rule.to_json())

# convert the object into a dict
rule_dict = rule_instance.to_dict()
# create an instance of Rule from a dict
rule_from_dict = Rule.from_dict(rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


