# WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner

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
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner import WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner from a JSON string
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_dict = web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner from a dict
web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRulesTriggersStatusCodesInner.from_dict(web_apps_list200_response_value_inner_properties_site_config_auto_heal_rules_triggers_status_codes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


