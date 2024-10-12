# GoogleAdsSearchads360V0CommonUnifiedLocationAsset

A unified location asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_profile_locations** | [**List[GoogleAdsSearchads360V0CommonBusinessProfileLocation]**](GoogleAdsSearchads360V0CommonBusinessProfileLocation.md) | The list of business locations for the customer. This will only be returned if the Location Asset is syncing from the Business Profile account. It is possible to have multiple Business Profile listings under the same account that point to the same Place ID. | [optional] 
**location_ownership_type** | **str** | The type of location ownership. If the type is BUSINESS_OWNER, it will be served as a location extension. If the type is AFFILIATE, it will be served as an affiliate location. | [optional] 
**place_id** | **str** | Place IDs uniquely identify a place in the Google Places database and on Google Maps. This field is unique for a given customer ID and asset type. See https://developers.google.com/places/web-service/place-id to learn more about Place ID. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_unified_location_asset import GoogleAdsSearchads360V0CommonUnifiedLocationAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonUnifiedLocationAsset from a JSON string
google_ads_searchads360_v0_common_unified_location_asset_instance = GoogleAdsSearchads360V0CommonUnifiedLocationAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonUnifiedLocationAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_unified_location_asset_dict = google_ads_searchads360_v0_common_unified_location_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonUnifiedLocationAsset from a dict
google_ads_searchads360_v0_common_unified_location_asset_from_dict = GoogleAdsSearchads360V0CommonUnifiedLocationAsset.from_dict(google_ads_searchads360_v0_common_unified_location_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


