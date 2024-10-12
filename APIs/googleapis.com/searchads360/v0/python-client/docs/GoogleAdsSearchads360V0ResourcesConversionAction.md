# GoogleAdsSearchads360V0ResourcesConversionAction

A conversion action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | App ID for an app conversion action. | [optional] 
**attribution_model_settings** | [**GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings**](GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings.md) |  | [optional] 
**category** | **str** | The category of conversions reported for this conversion action. | [optional] 
**click_through_lookback_window_days** | **str** | The maximum number of days that may elapse between an interaction (for example, a click) and a conversion event. | [optional] 
**creation_time** | **str** | Output only. Timestamp of the Floodlight activity&#39;s creation, formatted in ISO 8601. | [optional] [readonly] 
**floodlight_settings** | [**GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings**](GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings.md) |  | [optional] 
**id** | **str** | Output only. The ID of the conversion action. | [optional] [readonly] 
**include_in_client_account_conversions_metric** | **bool** | Whether this conversion action should be included in the \&quot;client_account_conversions\&quot; metric. | [optional] 
**include_in_conversions_metric** | **bool** | Output only. Whether this conversion action should be included in the \&quot;conversions\&quot; metric. | [optional] [readonly] 
**name** | **str** | The name of the conversion action. This field is required and should not be empty when creating new conversion actions. | [optional] 
**owner_customer** | **str** | Output only. The resource name of the conversion action owner customer, or null if this is a system-defined conversion action. | [optional] [readonly] 
**primary_for_goal** | **bool** | If a conversion action&#39;s primary_for_goal bit is false, the conversion action is non-biddable for all campaigns regardless of their customer conversion goal or campaign conversion goal. However, custom conversion goals do not respect primary_for_goal, so if a campaign has a custom conversion goal configured with a primary_for_goal &#x3D; false conversion action, that conversion action is still biddable. By default, primary_for_goal will be true if not set. In V9, primary_for_goal can only be set to false after creation through an &#39;update&#39; operation because it&#39;s not declared as optional. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the conversion action. Conversion action resource names have the form: &#x60;customers/{customer_id}/conversionActions/{conversion_action_id}&#x60; | [optional] 
**status** | **str** | The status of this conversion action for conversion event accrual. | [optional] 
**type** | **str** | Immutable. The type of this conversion action. | [optional] 
**value_settings** | [**GoogleAdsSearchads360V0ResourcesConversionActionValueSettings**](GoogleAdsSearchads360V0ResourcesConversionActionValueSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_conversion_action import GoogleAdsSearchads360V0ResourcesConversionAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesConversionAction from a JSON string
google_ads_searchads360_v0_resources_conversion_action_instance = GoogleAdsSearchads360V0ResourcesConversionAction.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesConversionAction.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_conversion_action_dict = google_ads_searchads360_v0_resources_conversion_action_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesConversionAction from a dict
google_ads_searchads360_v0_resources_conversion_action_from_dict = GoogleAdsSearchads360V0ResourcesConversionAction.from_dict(google_ads_searchads360_v0_resources_conversion_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


