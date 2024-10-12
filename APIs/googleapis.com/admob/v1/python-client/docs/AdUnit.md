# AdUnit

Describes an AdMob ad unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_format** | **str** | AdFormat of the ad unit. Possible values are as follows: \&quot;APP_OPEN\&quot; - App Open ad format. \&quot;BANNER\&quot; - Banner ad format. \&quot;BANNER_INTERSTITIAL\&quot; - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. \&quot;INTERSTITIAL\&quot; - A full screen ad. Supported ad types are \&quot;RICH_MEDIA\&quot; and \&quot;VIDEO\&quot;. \&quot;NATIVE\&quot; - Native ad format. \&quot;REWARDED\&quot; - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are \&quot;RICH_MEDIA\&quot; (interactive) and video where video can not be excluded. \&quot;REWARDED_INTERSTITIAL\&quot; - Rewarded Interstitial ad format. Only supports video ad type. See https://support.google.com/admob/answer/9884467. | [optional] 
**ad_types** | **List[str]** | Ad media type supported by this ad unit. Possible values as follows: \&quot;RICH_MEDIA\&quot; - Text, image, and other non-video media. \&quot;VIDEO\&quot; - Video media. | [optional] 
**ad_unit_id** | **str** | The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789 | [optional] 
**app_id** | **str** | The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789 | [optional] 
**display_name** | **str** | The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters. | [optional] 
**name** | **str** | Resource name for this ad unit. Format is accounts/{publisher_id}/adUnits/{ad_unit_id_fragment} Example: accounts/pub-9876543210987654/adUnits/0123456789 | [optional] 

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


