# GoogleAdsSearchads360V0CommonBusinessProfileLocation

Business Profile location data synced from the linked Business Profile account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **List[str]** | Advertiser specified label for the location on the Business Profile account. This is synced from the Business Profile account. | [optional] 
**listing_id** | **str** | Listing ID of this Business Profile location. This is synced from the linked Business Profile account. | [optional] 
**store_code** | **str** | Business Profile store code of this location. This is synced from the Business Profile account. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_business_profile_location import GoogleAdsSearchads360V0CommonBusinessProfileLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonBusinessProfileLocation from a JSON string
google_ads_searchads360_v0_common_business_profile_location_instance = GoogleAdsSearchads360V0CommonBusinessProfileLocation.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonBusinessProfileLocation.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_business_profile_location_dict = google_ads_searchads360_v0_common_business_profile_location_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonBusinessProfileLocation from a dict
google_ads_searchads360_v0_common_business_profile_location_from_dict = GoogleAdsSearchads360V0CommonBusinessProfileLocation.from_dict(google_ads_searchads360_v0_common_business_profile_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


