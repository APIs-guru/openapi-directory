# GoogleAdsSearchads360V0ResourcesAdGroupBidModifier

Represents an ad group bid modifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_modifier** | **float** | The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type. | [optional] 
**device** | [**GoogleAdsSearchads360V0CommonDeviceInfo**](GoogleAdsSearchads360V0CommonDeviceInfo.md) |  | [optional] 
**resource_name** | **str** | Immutable. The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: &#x60;customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group_bid_modifier import GoogleAdsSearchads360V0ResourcesAdGroupBidModifier

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupBidModifier from a JSON string
google_ads_searchads360_v0_resources_ad_group_bid_modifier_instance = GoogleAdsSearchads360V0ResourcesAdGroupBidModifier.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroupBidModifier.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_bid_modifier_dict = google_ads_searchads360_v0_resources_ad_group_bid_modifier_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupBidModifier from a dict
google_ads_searchads360_v0_resources_ad_group_bid_modifier_from_dict = GoogleAdsSearchads360V0ResourcesAdGroupBidModifier.from_dict(google_ads_searchads360_v0_resources_ad_group_bid_modifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


