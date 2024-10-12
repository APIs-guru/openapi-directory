# GoogleAnalyticsAdminV1betaDataRetentionSettings

Settings values for data retention. This is a singleton resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_data_retention** | **str** | The length of time that event-level data is retained. | [optional] 
**name** | **str** | Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings | [optional] [readonly] 
**reset_user_data_on_new_activity** | **bool** | If true, reset the retention period for the user identifier with every event from that user. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_data_retention_settings import GoogleAnalyticsAdminV1betaDataRetentionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaDataRetentionSettings from a JSON string
google_analytics_admin_v1beta_data_retention_settings_instance = GoogleAnalyticsAdminV1betaDataRetentionSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaDataRetentionSettings.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_data_retention_settings_dict = google_analytics_admin_v1beta_data_retention_settings_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaDataRetentionSettings from a dict
google_analytics_admin_v1beta_data_retention_settings_from_dict = GoogleAnalyticsAdminV1betaDataRetentionSettings.from_dict(google_analytics_admin_v1beta_data_retention_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


