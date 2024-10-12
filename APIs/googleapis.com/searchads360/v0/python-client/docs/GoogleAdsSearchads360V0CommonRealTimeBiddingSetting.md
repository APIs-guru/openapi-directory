# GoogleAdsSearchads360V0CommonRealTimeBiddingSetting

Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opt_in** | **bool** | Whether the campaign is opted in to real-time bidding. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_real_time_bidding_setting import GoogleAdsSearchads360V0CommonRealTimeBiddingSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonRealTimeBiddingSetting from a JSON string
google_ads_searchads360_v0_common_real_time_bidding_setting_instance = GoogleAdsSearchads360V0CommonRealTimeBiddingSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonRealTimeBiddingSetting.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_real_time_bidding_setting_dict = google_ads_searchads360_v0_common_real_time_bidding_setting_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonRealTimeBiddingSetting from a dict
google_ads_searchads360_v0_common_real_time_bidding_setting_from_dict = GoogleAdsSearchads360V0CommonRealTimeBiddingSetting.from_dict(google_ads_searchads360_v0_common_real_time_bidding_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


