# RuleShortResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** | The date the rule was created | [optional] 
**description** | **str** | Rule description | [optional] 
**id** | **int** | Rule Id | [optional] 
**modified_date** | **str** | The date the rule was modified | [optional] 
**name** | **str** | Rule name | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.rule_short_response import RuleShortResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RuleShortResponse from a JSON string
rule_short_response_instance = RuleShortResponse.from_json(json)
# print the JSON string representation of the object
print(RuleShortResponse.to_json())

# convert the object into a dict
rule_short_response_dict = rule_short_response_instance.to_dict()
# create an instance of RuleShortResponse from a dict
rule_short_response_from_dict = RuleShortResponse.from_dict(rule_short_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


