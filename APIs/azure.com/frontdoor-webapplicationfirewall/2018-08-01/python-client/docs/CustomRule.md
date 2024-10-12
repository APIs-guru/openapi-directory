# CustomRule

Defines contents of a web application rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Type of Actions | 
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**match_conditions** | [**List[MatchCondition]**](MatchCondition.md) | List of match conditions | 
**name** | **str** | Gets name of the resource that is unique within a policy. This name can be used to access the resource. | [optional] 
**priority** | **int** | Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value | 
**rate_limit_duration_in_minutes** | **int** | Defines rate limit duration. Default - 1 minute | [optional] 
**rate_limit_threshold** | **int** | Defines rate limit threshold | [optional] 
**rule_type** | **str** | Describes type of rule | 
**transforms** | [**List[Transform]**](Transform.md) | List of transforms | [optional] 

## Example

```python
from openapi_client.models.custom_rule import CustomRule

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRule from a JSON string
custom_rule_instance = CustomRule.from_json(json)
# print the JSON string representation of the object
print(CustomRule.to_json())

# convert the object into a dict
custom_rule_dict = custom_rule_instance.to_dict()
# create an instance of CustomRule from a dict
custom_rule_from_dict = CustomRule.from_dict(custom_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


