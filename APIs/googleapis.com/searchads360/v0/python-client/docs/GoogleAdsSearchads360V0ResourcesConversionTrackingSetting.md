# GoogleAdsSearchads360V0ResourcesConversionTrackingSetting

A collection of customer-wide settings related to Search Ads 360 Conversion Tracking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_customer_data_terms** | **bool** | Output only. Whether the customer has accepted customer data terms. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. For more information, see https://support.google.com/adspolicy/answer/7475709. | [optional] [readonly] 
**conversion_tracking_id** | **str** | Output only. The conversion tracking id used for this account. This id doesn&#39;t indicate whether the customer uses conversion tracking (conversion_tracking_status does). This field is read-only. | [optional] [readonly] 
**conversion_tracking_status** | **str** | Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the &#x60;login-customer-id&#x60; of the request. | [optional] [readonly] 
**cross_account_conversion_tracking_id** | **str** | Output only. The conversion tracking id of the customer&#39;s manager. This is set when the customer is opted into cross-account conversion tracking, and it overrides conversion_tracking_id. | [optional] [readonly] 
**enhanced_conversions_for_leads_enabled** | **bool** | Output only. Whether the customer is opted-in for enhanced conversions for leads. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. | [optional] [readonly] 
**google_ads_conversion_customer** | **str** | Output only. The resource name of the customer where conversions are created and managed. This field is read-only. | [optional] [readonly] 
**google_ads_cross_account_conversion_tracking_id** | **str** | Output only. The conversion tracking id of the customer&#39;s manager. This is set when the customer is opted into conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_conversion_tracking_setting import GoogleAdsSearchads360V0ResourcesConversionTrackingSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesConversionTrackingSetting from a JSON string
google_ads_searchads360_v0_resources_conversion_tracking_setting_instance = GoogleAdsSearchads360V0ResourcesConversionTrackingSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesConversionTrackingSetting.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_conversion_tracking_setting_dict = google_ads_searchads360_v0_resources_conversion_tracking_setting_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesConversionTrackingSetting from a dict
google_ads_searchads360_v0_resources_conversion_tracking_setting_from_dict = GoogleAdsSearchads360V0ResourcesConversionTrackingSetting.from_dict(google_ads_searchads360_v0_resources_conversion_tracking_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


