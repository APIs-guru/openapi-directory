# AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner

Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_host_name** | **str** | Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. | [optional] 
**change_decision_callback_url** | **str** | Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts. https://www.siteextensions.net/packages/TiPCallback/ | [optional] 
**change_interval_in_minutes** | **int** | Specifies interval in minutes to reevaluate ReroutePercentage. | [optional] 
**change_step** | **float** | In auto ramp up scenario this is the step to add/remove from &lt;code&gt;ReroutePercentage&lt;/code&gt; until it reaches  &lt;code&gt;MinReroutePercentage&lt;/code&gt; or &lt;code&gt;MaxReroutePercentage&lt;/code&gt;. Site metrics are checked every N minutes specified in &lt;code&gt;ChangeIntervalInMinutes&lt;/code&gt;. Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified in &lt;code&gt;ChangeDecisionCallbackUrl&lt;/code&gt;. | [optional] 
**max_reroute_percentage** | **float** | Specifies upper boundary below which ReroutePercentage will stay. | [optional] 
**min_reroute_percentage** | **float** | Specifies lower boundary above which ReroutePercentage will stay. | [optional] 
**name** | **str** | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | [optional] 
**reroute_percentage** | **float** | Percentage of the traffic which will be redirected to &lt;code&gt;ActionHostName&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_web_apps200_response_value_inner_properties_site_config_experiments_ramp_up_rules_inner import AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner from a JSON string
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_experiments_ramp_up_rules_inner_instance = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner.to_json())

# convert the object into a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_experiments_ramp_up_rules_inner_dict = app_service_plans_list_web_apps200_response_value_inner_properties_site_config_experiments_ramp_up_rules_inner_instance.to_dict()
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner from a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_experiments_ramp_up_rules_inner_from_dict = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner.from_dict(app_service_plans_list_web_apps200_response_value_inner_properties_site_config_experiments_ramp_up_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


