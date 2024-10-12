# RampUpRule

Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_host_name** | **str** | Hostname of a slot to which the traffic will be redirected if decided to. E.g. mysite-stage.azurewebsites.net | [optional] 
**change_decision_callback_url** | **str** | Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified. See TiPCallback site extension for the scaffold and contracts.              https://www.siteextensions.net/packages/TiPCallback/ | [optional] 
**change_interval_in_minutes** | **int** | [Optional] Specifies interval in minutes to reevaluate ReroutePercentage | [optional] 
**change_step** | **float** | [Optional] In auto ramp up scenario this is the step to add/remove from {Microsoft.Web.Hosting.Administration.RampUpRule.ReroutePercentage} until it reaches               {Microsoft.Web.Hosting.Administration.RampUpRule.MinReroutePercentage} or {Microsoft.Web.Hosting.Administration.RampUpRule.MaxReroutePercentage}. Site metrics are checked every N minutes specified in {Microsoft.Web.Hosting.Administration.RampUpRule.ChangeIntervalInMinutes}.              Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified in {Microsoft.Web.Hosting.Administration.RampUpRule.ChangeDecisionCallbackUrl} | [optional] 
**max_reroute_percentage** | **float** | [Optional] Specifies upper boundary below which ReroutePercentage will stay. | [optional] 
**min_reroute_percentage** | **float** | [Optional] Specifies lower boundary above which ReroutePercentage will stay. | [optional] 
**name** | **str** | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | [optional] 
**reroute_percentage** | **float** | Percentage of the traffic which will be redirected to {Microsoft.Web.Hosting.Administration.RampUpRule.ActionHostName} | [optional] 

## Example

```python
from openapi_client.models.ramp_up_rule import RampUpRule

# TODO update the JSON string below
json = "{}"
# create an instance of RampUpRule from a JSON string
ramp_up_rule_instance = RampUpRule.from_json(json)
# print the JSON string representation of the object
print(RampUpRule.to_json())

# convert the object into a dict
ramp_up_rule_dict = ramp_up_rule_instance.to_dict()
# create an instance of RampUpRule from a dict
ramp_up_rule_from_dict = RampUpRule.from_dict(ramp_up_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


