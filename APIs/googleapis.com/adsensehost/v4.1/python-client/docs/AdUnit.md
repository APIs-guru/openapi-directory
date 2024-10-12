# AdUnit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Identity code of this ad unit, not necessarily unique across ad clients. | [optional] 
**content_ads_settings** | [**AdUnitContentAdsSettings**](AdUnitContentAdsSettings.md) |  | [optional] 
**custom_style** | [**AdStyle**](AdStyle.md) |  | [optional] 
**id** | **str** | Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsensehost#adUnit. | [optional] [default to 'adsensehost#adUnit']
**mobile_content_ads_settings** | [**AdUnitMobileContentAdsSettings**](AdUnitMobileContentAdsSettings.md) |  | [optional] 
**name** | **str** | Name of this ad unit. | [optional] 
**status** | **str** | Status of this ad unit. Possible values are: NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.  ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.  INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days. | [optional] 

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


