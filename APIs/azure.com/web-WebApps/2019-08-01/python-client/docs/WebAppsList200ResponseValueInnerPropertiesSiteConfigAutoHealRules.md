# WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules

Rules that can be defined for auto-heal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions**](WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions.md) |  | [optional] 
**triggers** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers**](WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers.md) |  | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules import WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules from a JSON string
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_dict = web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules from a dict
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules.from_dict(web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


