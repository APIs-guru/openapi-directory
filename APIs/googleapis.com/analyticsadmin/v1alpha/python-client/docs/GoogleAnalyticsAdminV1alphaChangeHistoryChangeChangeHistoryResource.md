# GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource

A snapshot of a resource as before or after the result of a change in change history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**GoogleAnalyticsAdminV1alphaAccount**](GoogleAnalyticsAdminV1alphaAccount.md) |  | [optional] 
**adsense_link** | [**GoogleAnalyticsAdminV1alphaAdSenseLink**](GoogleAnalyticsAdminV1alphaAdSenseLink.md) |  | [optional] 
**attribution_settings** | [**GoogleAnalyticsAdminV1alphaAttributionSettings**](GoogleAnalyticsAdminV1alphaAttributionSettings.md) |  | [optional] 
**audience** | [**GoogleAnalyticsAdminV1alphaAudience**](GoogleAnalyticsAdminV1alphaAudience.md) |  | [optional] 
**bigquery_link** | [**GoogleAnalyticsAdminV1alphaBigQueryLink**](GoogleAnalyticsAdminV1alphaBigQueryLink.md) |  | [optional] 
**calculated_metric** | [**GoogleAnalyticsAdminV1alphaCalculatedMetric**](GoogleAnalyticsAdminV1alphaCalculatedMetric.md) |  | [optional] 
**channel_group** | [**GoogleAnalyticsAdminV1alphaChannelGroup**](GoogleAnalyticsAdminV1alphaChannelGroup.md) |  | [optional] 
**conversion_event** | [**GoogleAnalyticsAdminV1alphaConversionEvent**](GoogleAnalyticsAdminV1alphaConversionEvent.md) |  | [optional] 
**custom_dimension** | [**GoogleAnalyticsAdminV1alphaCustomDimension**](GoogleAnalyticsAdminV1alphaCustomDimension.md) |  | [optional] 
**custom_metric** | [**GoogleAnalyticsAdminV1alphaCustomMetric**](GoogleAnalyticsAdminV1alphaCustomMetric.md) |  | [optional] 
**data_redaction_settings** | [**GoogleAnalyticsAdminV1alphaDataRedactionSettings**](GoogleAnalyticsAdminV1alphaDataRedactionSettings.md) |  | [optional] 
**data_retention_settings** | [**GoogleAnalyticsAdminV1alphaDataRetentionSettings**](GoogleAnalyticsAdminV1alphaDataRetentionSettings.md) |  | [optional] 
**data_stream** | [**GoogleAnalyticsAdminV1alphaDataStream**](GoogleAnalyticsAdminV1alphaDataStream.md) |  | [optional] 
**display_video360_advertiser_link** | [**GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink**](GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.md) |  | [optional] 
**display_video360_advertiser_link_proposal** | [**GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal**](GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.md) |  | [optional] 
**enhanced_measurement_settings** | [**GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings**](GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings.md) |  | [optional] 
**event_create_rule** | [**GoogleAnalyticsAdminV1alphaEventCreateRule**](GoogleAnalyticsAdminV1alphaEventCreateRule.md) |  | [optional] 
**expanded_data_set** | [**GoogleAnalyticsAdminV1alphaExpandedDataSet**](GoogleAnalyticsAdminV1alphaExpandedDataSet.md) |  | [optional] 
**firebase_link** | [**GoogleAnalyticsAdminV1alphaFirebaseLink**](GoogleAnalyticsAdminV1alphaFirebaseLink.md) |  | [optional] 
**google_ads_link** | [**GoogleAnalyticsAdminV1alphaGoogleAdsLink**](GoogleAnalyticsAdminV1alphaGoogleAdsLink.md) |  | [optional] 
**google_signals_settings** | [**GoogleAnalyticsAdminV1alphaGoogleSignalsSettings**](GoogleAnalyticsAdminV1alphaGoogleSignalsSettings.md) |  | [optional] 
**measurement_protocol_secret** | [**GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret**](GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret.md) |  | [optional] 
**var_property** | [**GoogleAnalyticsAdminV1alphaProperty**](GoogleAnalyticsAdminV1alphaProperty.md) |  | [optional] 
**search_ads360_link** | [**GoogleAnalyticsAdminV1alphaSearchAds360Link**](GoogleAnalyticsAdminV1alphaSearchAds360Link.md) |  | [optional] 
**skadnetwork_conversion_value_schema** | [**GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema**](GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_change_history_change_change_history_resource import GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource from a JSON string
google_analytics_admin_v1alpha_change_history_change_change_history_resource_instance = GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_change_history_change_change_history_resource_dict = google_analytics_admin_v1alpha_change_history_change_change_history_resource_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource from a dict
google_analytics_admin_v1alpha_change_history_change_change_history_resource_from_dict = GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.from_dict(google_analytics_admin_v1alpha_change_history_change_change_history_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


