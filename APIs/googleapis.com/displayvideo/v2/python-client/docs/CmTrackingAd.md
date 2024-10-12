# CmTrackingAd

A Campaign Manager 360 tracking ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cm_ad_id** | **str** | The ad ID of the campaign manager 360 tracking Ad. | [optional] 
**cm_creative_id** | **str** | The creative ID of the campaign manager 360 tracking Ad. | [optional] 
**cm_placement_id** | **str** | The placement ID of the campaign manager 360 tracking Ad. | [optional] 

## Example

```python
from openapi_client.models.cm_tracking_ad import CmTrackingAd

# TODO update the JSON string below
json = "{}"
# create an instance of CmTrackingAd from a JSON string
cm_tracking_ad_instance = CmTrackingAd.from_json(json)
# print the JSON string representation of the object
print(CmTrackingAd.to_json())

# convert the object into a dict
cm_tracking_ad_dict = cm_tracking_ad_instance.to_dict()
# create an instance of CmTrackingAd from a dict
cm_tracking_ad_from_dict = CmTrackingAd.from_dict(cm_tracking_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


