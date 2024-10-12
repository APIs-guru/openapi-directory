# ShowbackRule

The showback rule model definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Rule id | [optional] [readonly] 
**name** | **str** | Rule name | [optional] [readonly] 
**properties** | [**ShowbackRuleProperties**](ShowbackRuleProperties.md) |  | [optional] 
**type** | **str** | Rule type | [optional] [readonly] 

## Example

```python
from openapi_client.models.showback_rule import ShowbackRule

# TODO update the JSON string below
json = "{}"
# create an instance of ShowbackRule from a JSON string
showback_rule_instance = ShowbackRule.from_json(json)
# print the JSON string representation of the object
print(ShowbackRule.to_json())

# convert the object into a dict
showback_rule_dict = showback_rule_instance.to_dict()
# create an instance of ShowbackRule from a dict
showback_rule_from_dict = ShowbackRule.from_dict(showback_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


