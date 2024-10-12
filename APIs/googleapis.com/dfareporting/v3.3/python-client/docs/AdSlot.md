# AdSlot

Ad Slot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment for this ad slot. | [optional] 
**compatibility** | **str** | Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. | [optional] 
**height** | **str** | Height of this ad slot. | [optional] 
**linked_placement_id** | **str** | ID of the placement from an external platform that is linked to this ad slot. | [optional] 
**name** | **str** | Name of this ad slot. | [optional] 
**payment_source_type** | **str** | Payment source type of this ad slot. | [optional] 
**primary** | **bool** | Primary ad slot of a roadblock inventory item. | [optional] 
**width** | **str** | Width of this ad slot. | [optional] 

## Example

```python
from openapi_client.models.ad_slot import AdSlot

# TODO update the JSON string below
json = "{}"
# create an instance of AdSlot from a JSON string
ad_slot_instance = AdSlot.from_json(json)
# print the JSON string representation of the object
print(AdSlot.to_json())

# convert the object into a dict
ad_slot_dict = ad_slot_instance.to_dict()
# create an instance of AdSlot from a dict
ad_slot_from_dict = AdSlot.from_dict(ad_slot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


