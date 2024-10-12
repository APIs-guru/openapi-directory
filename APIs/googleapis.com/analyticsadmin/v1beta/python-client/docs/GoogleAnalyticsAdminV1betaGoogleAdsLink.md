# GoogleAnalyticsAdminV1betaGoogleAdsLink

A link between a GA4 property and a Google Ads account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_personalization_enabled** | **bool** | Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true. | [optional] 
**can_manage_clients** | **bool** | Output only. If true, this link is for a Google Ads manager account. | [optional] [readonly] 
**create_time** | **str** | Output only. Time when this link was originally created. | [optional] [readonly] 
**creator_email_address** | **str** | Output only. Email address of the user that created the link. An empty string will be returned if the email address can&#39;t be retrieved. | [optional] [readonly] 
**customer_id** | **str** | Immutable. Google Ads customer ID. | [optional] 
**name** | **str** | Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when this link was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_google_ads_link import GoogleAnalyticsAdminV1betaGoogleAdsLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaGoogleAdsLink from a JSON string
google_analytics_admin_v1beta_google_ads_link_instance = GoogleAnalyticsAdminV1betaGoogleAdsLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaGoogleAdsLink.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_google_ads_link_dict = google_analytics_admin_v1beta_google_ads_link_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaGoogleAdsLink from a dict
google_analytics_admin_v1beta_google_ads_link_from_dict = GoogleAnalyticsAdminV1betaGoogleAdsLink.from_dict(google_analytics_admin_v1beta_google_ads_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


