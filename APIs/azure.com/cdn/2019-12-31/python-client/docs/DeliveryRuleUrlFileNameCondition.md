# DeliveryRuleUrlFileNameCondition

Defines the UrlFileName condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**UrlFileNameMatchConditionParameters**](UrlFileNameMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_url_file_name_condition import DeliveryRuleUrlFileNameCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleUrlFileNameCondition from a JSON string
delivery_rule_url_file_name_condition_instance = DeliveryRuleUrlFileNameCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleUrlFileNameCondition.to_json())

# convert the object into a dict
delivery_rule_url_file_name_condition_dict = delivery_rule_url_file_name_condition_instance.to_dict()
# create an instance of DeliveryRuleUrlFileNameCondition from a dict
delivery_rule_url_file_name_condition_from_dict = DeliveryRuleUrlFileNameCondition.from_dict(delivery_rule_url_file_name_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


