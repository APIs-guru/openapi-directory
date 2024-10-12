# AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner

Trigger based on status code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Request Count. | [optional] 
**status** | **int** | HTTP status code. | [optional] 
**sub_status** | **int** | Request Sub Status. | [optional] 
**time_interval** | **str** | Time interval. | [optional] 
**win32_status** | **int** | Win32 error code. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner import AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner from a JSON string
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_instance = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner.to_json())

# convert the object into a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_dict = app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_instance.to_dict()
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner from a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_from_dict = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner.from_dict(app_service_plans_list_web_apps200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


