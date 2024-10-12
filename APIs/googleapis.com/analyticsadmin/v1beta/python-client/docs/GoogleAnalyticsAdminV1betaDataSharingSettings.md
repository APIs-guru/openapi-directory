# GoogleAnalyticsAdminV1betaDataSharingSettings

A resource message representing data sharing settings of a Google Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name. Format: accounts/{account}/dataSharingSettings Example: \&quot;accounts/1000/dataSharingSettings\&quot; | [optional] [readonly] 
**sharing_with_google_any_sales_enabled** | **bool** | Allows any of Google sales to access the data in order to suggest configuration changes to improve results. | [optional] 
**sharing_with_google_assigned_sales_enabled** | **bool** | Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled. | [optional] 
**sharing_with_google_products_enabled** | **bool** | Allows Google to use the data to improve other Google products or services. | [optional] 
**sharing_with_google_support_enabled** | **bool** | Allows Google support to access the data in order to help troubleshoot issues. | [optional] 
**sharing_with_others_enabled** | **bool** | Allows Google to share the data anonymously in aggregate form with others. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_data_sharing_settings import GoogleAnalyticsAdminV1betaDataSharingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaDataSharingSettings from a JSON string
google_analytics_admin_v1beta_data_sharing_settings_instance = GoogleAnalyticsAdminV1betaDataSharingSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaDataSharingSettings.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_data_sharing_settings_dict = google_analytics_admin_v1beta_data_sharing_settings_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaDataSharingSettings from a dict
google_analytics_admin_v1beta_data_sharing_settings_from_dict = GoogleAnalyticsAdminV1betaDataSharingSettings.from_dict(google_analytics_admin_v1beta_data_sharing_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


