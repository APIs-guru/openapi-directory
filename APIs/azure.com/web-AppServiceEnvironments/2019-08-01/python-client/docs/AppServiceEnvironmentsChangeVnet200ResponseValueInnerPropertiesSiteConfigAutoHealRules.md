# AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRules

Rules that can be defined for auto-heal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions**](AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions.md) |  | [optional] 
**triggers** | [**AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers**](AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggers.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules import AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRules

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRules from a JSON string
app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRules.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRules.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_dict = app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRules from a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigAutoHealRules.from_dict(app_service_environments_change_vnet200_response_value_inner_properties_site_config_auto_heal_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


