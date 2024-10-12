# AdUnit

Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_ads_settings** | [**ContentAdsSettings**](ContentAdsSettings.md) |  | [optional] 
**display_name** | **str** | Required. Display name of the ad unit, as provided when the ad unit was created. | [optional] 
**name** | **str** | Output only. Resource name of the ad unit. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit} | [optional] [readonly] 
**reporting_dimension_id** | **str** | Output only. Unique ID of the ad unit as used in the &#x60;AD_UNIT_ID&#x60; reporting dimension. | [optional] [readonly] 
**state** | **str** | Required. State of the ad unit. | [optional] 

## Example

```python
from openapi_client.models.ad_unit import AdUnit

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnit from a JSON string
ad_unit_instance = AdUnit.from_json(json)
# print the JSON string representation of the object
print(AdUnit.to_json())

# convert the object into a dict
ad_unit_dict = ad_unit_instance.to_dict()
# create an instance of AdUnit from a dict
ad_unit_from_dict = AdUnit.from_dict(ad_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


