# WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers

Triggers for auto-heal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_bytes_in_kb** | **int** | A rule based on private bytes. | [optional] 
**requests** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersRequests**](WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersRequests.md) |  | [optional] 
**slow_requests** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersSlowRequests**](WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersSlowRequests.md) |  | [optional] 
**status_codes** | [**List[WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner]**](WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner.md) | A rule based on status codes. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers import WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers from a JSON string
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_dict = web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers from a dict
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers.from_dict(web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


