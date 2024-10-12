# DeliveryRuleUrlFileExtensionCondition

Defines the UrlFileExtension condition for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**UrlFileExtensionMatchConditionParameters**](UrlFileExtensionMatchConditionParameters.md) |  | 

## Example

```python
from openapi_client.models.delivery_rule_url_file_extension_condition import DeliveryRuleUrlFileExtensionCondition

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryRuleUrlFileExtensionCondition from a JSON string
delivery_rule_url_file_extension_condition_instance = DeliveryRuleUrlFileExtensionCondition.from_json(json)
# print the JSON string representation of the object
print(DeliveryRuleUrlFileExtensionCondition.to_json())

# convert the object into a dict
delivery_rule_url_file_extension_condition_dict = delivery_rule_url_file_extension_condition_instance.to_dict()
# create an instance of DeliveryRuleUrlFileExtensionCondition from a dict
delivery_rule_url_file_extension_condition_from_dict = DeliveryRuleUrlFileExtensionCondition.from_dict(delivery_rule_url_file_extension_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


