# DynamicAdRatePreference

A type that defines the ad rate details for a Promoted Listings Standard (PLS) ad campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_rate_adjustment_percent** | **str** | The percentage above or below (-) the eBay suggested ad rate that a seller is willing to pay.&lt;br /&gt;&lt;br /&gt;This specifies the maximum and minimum values to which an ad rate can be dynamically adjusted. | [optional] 
**ad_rate_cap_percent** | **str** | The maximum value (specified as a percentage) to which the eBay suggested ad rate can be adjusted. The adjusted ad rate will never exceed this percentage. | [optional] 

## Example

```python
from openapi_client.models.dynamic_ad_rate_preference import DynamicAdRatePreference

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicAdRatePreference from a JSON string
dynamic_ad_rate_preference_instance = DynamicAdRatePreference.from_json(json)
# print the JSON string representation of the object
print(DynamicAdRatePreference.to_json())

# convert the object into a dict
dynamic_ad_rate_preference_dict = dynamic_ad_rate_preference_instance.to_dict()
# create an instance of DynamicAdRatePreference from a dict
dynamic_ad_rate_preference_from_dict = DynamicAdRatePreference.from_dict(dynamic_ad_rate_preference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


