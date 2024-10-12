# AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions

Actions which to take by the auto-heal module when a rule is triggered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | Predefined action to be taken. | [optional] 
**custom_action** | [**AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActionsCustomAction**](AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActionsCustomAction.md) |  | [optional] 
**min_process_execution_time** | **str** | Minimum time the process must execute before taking the action | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_actions import AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions from a JSON string
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_actions_instance = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions.to_json())

# convert the object into a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_actions_dict = app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_actions_instance.to_dict()
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions from a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_actions_from_dict = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesActions.from_dict(app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_actions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


