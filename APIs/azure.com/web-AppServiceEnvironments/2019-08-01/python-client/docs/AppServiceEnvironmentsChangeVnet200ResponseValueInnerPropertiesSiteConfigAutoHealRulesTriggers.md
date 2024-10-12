# AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers

Triggers for auto-heal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_bytes_in_kb** | **int** | A rule based on private bytes. | [optional] 
**requests** | [**AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersRequests**](AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersRequests.md) |  | [optional] 
**slow_requests** | [**AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersSlowRequests**](AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersSlowRequests.md) |  | [optional] 
**status_codes** | [**List[AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner]**](AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner.md) | A rule based on status codes. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_triggers import AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers from a JSON string
app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_triggers_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_triggers_dict = app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_triggers_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers from a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_triggers_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers.from_dict(app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_triggers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


