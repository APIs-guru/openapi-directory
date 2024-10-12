# LocationThresholdRuleCondition

A rule condition based on a certain number of locations failing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_location_count** | **int** | the number of locations that must fail to activate the alert. | 
**window_size** | **str** | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. | [optional] 

## Example

```python
from openapi_client.models.location_threshold_rule_condition import LocationThresholdRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of LocationThresholdRuleCondition from a JSON string
location_threshold_rule_condition_instance = LocationThresholdRuleCondition.from_json(json)
# print the JSON string representation of the object
print(LocationThresholdRuleCondition.to_json())

# convert the object into a dict
location_threshold_rule_condition_dict = location_threshold_rule_condition_instance.to_dict()
# create an instance of LocationThresholdRuleCondition from a dict
location_threshold_rule_condition_from_dict = LocationThresholdRuleCondition.from_dict(location_threshold_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


