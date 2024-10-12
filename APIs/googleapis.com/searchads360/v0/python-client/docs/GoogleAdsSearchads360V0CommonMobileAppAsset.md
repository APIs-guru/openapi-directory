# GoogleAdsSearchads360V0CommonMobileAppAsset

An asset representing a mobile app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Required. A string that uniquely identifies a mobile application. It should just contain the platform native id, like \&quot;com.android.ebay\&quot; for Android or \&quot;12345689\&quot; for iOS. | [optional] 
**app_store** | **str** | Required. The application store that distributes this specific app. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_mobile_app_asset import GoogleAdsSearchads360V0CommonMobileAppAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonMobileAppAsset from a JSON string
google_ads_searchads360_v0_common_mobile_app_asset_instance = GoogleAdsSearchads360V0CommonMobileAppAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonMobileAppAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_mobile_app_asset_dict = google_ads_searchads360_v0_common_mobile_app_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonMobileAppAsset from a dict
google_ads_searchads360_v0_common_mobile_app_asset_from_dict = GoogleAdsSearchads360V0CommonMobileAppAsset.from_dict(google_ads_searchads360_v0_common_mobile_app_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


