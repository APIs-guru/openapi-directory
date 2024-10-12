# GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource

A snapshot of a resource as before or after the result of a change in change history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**GoogleAnalyticsAdminV1betaAccount**](GoogleAnalyticsAdminV1betaAccount.md) |  | [optional] 
**conversion_event** | [**GoogleAnalyticsAdminV1betaConversionEvent**](GoogleAnalyticsAdminV1betaConversionEvent.md) |  | [optional] 
**data_retention_settings** | [**GoogleAnalyticsAdminV1betaDataRetentionSettings**](GoogleAnalyticsAdminV1betaDataRetentionSettings.md) |  | [optional] 
**data_stream** | [**GoogleAnalyticsAdminV1betaDataStream**](GoogleAnalyticsAdminV1betaDataStream.md) |  | [optional] 
**firebase_link** | [**GoogleAnalyticsAdminV1betaFirebaseLink**](GoogleAnalyticsAdminV1betaFirebaseLink.md) |  | [optional] 
**google_ads_link** | [**GoogleAnalyticsAdminV1betaGoogleAdsLink**](GoogleAnalyticsAdminV1betaGoogleAdsLink.md) |  | [optional] 
**measurement_protocol_secret** | [**GoogleAnalyticsAdminV1betaMeasurementProtocolSecret**](GoogleAnalyticsAdminV1betaMeasurementProtocolSecret.md) |  | [optional] 
**var_property** | [**GoogleAnalyticsAdminV1betaProperty**](GoogleAnalyticsAdminV1betaProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_change_history_change_change_history_resource import GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource from a JSON string
google_analytics_admin_v1beta_change_history_change_change_history_resource_instance = GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_change_history_change_change_history_resource_dict = google_analytics_admin_v1beta_change_history_change_change_history_resource_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource from a dict
google_analytics_admin_v1beta_change_history_change_change_history_resource_from_dict = GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource.from_dict(google_analytics_admin_v1beta_change_history_change_change_history_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


