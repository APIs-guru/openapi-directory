# AcquisitionTargetingRule

Represents a targeting rule of the form: User never had {scope} before.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**TargetingRuleScope**](TargetingRuleScope.md) |  | [optional] 

## Example

```python
from openapi_client.models.acquisition_targeting_rule import AcquisitionTargetingRule

# TODO update the JSON string below
json = "{}"
# create an instance of AcquisitionTargetingRule from a JSON string
acquisition_targeting_rule_instance = AcquisitionTargetingRule.from_json(json)
# print the JSON string representation of the object
print(AcquisitionTargetingRule.to_json())

# convert the object into a dict
acquisition_targeting_rule_dict = acquisition_targeting_rule_instance.to_dict()
# create an instance of AcquisitionTargetingRule from a dict
acquisition_targeting_rule_from_dict = AcquisitionTargetingRule.from_dict(acquisition_targeting_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


