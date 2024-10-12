# Ad

Contains properties of a Campaign Manager ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this ad. This is a read-only field that can be left blank. | [optional] 
**active** | **bool** | Whether this ad is active. When true, archived must be false. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this ad. This is a required field on insertion. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**archived** | **bool** | Whether this ad is archived. When true, active must be false. | [optional] 
**audience_segment_id** | **str** | Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD. | [optional] 
**campaign_id** | **str** | Campaign ID of this ad. This is a required field on insertion. | [optional] 
**campaign_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**click_through_url** | [**ClickThroughUrl**](ClickThroughUrl.md) |  | [optional] 
**click_through_url_suffix_properties** | [**ClickThroughUrlSuffixProperties**](ClickThroughUrlSuffixProperties.md) |  | [optional] 
**comments** | **str** | Comments for this ad. | [optional] 
**compatibility** | **str** | Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard. | [optional] 
**create_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**creative_group_assignments** | [**List[CreativeGroupAssignment]**](CreativeGroupAssignment.md) | Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments. | [optional] 
**creative_rotation** | [**CreativeRotation**](CreativeRotation.md) |  | [optional] 
**day_part_targeting** | [**DayPartTargeting**](DayPartTargeting.md) |  | [optional] 
**default_click_through_event_tag_properties** | [**DefaultClickThroughEventTagProperties**](DefaultClickThroughEventTagProperties.md) |  | [optional] 
**delivery_schedule** | [**DeliverySchedule**](DeliverySchedule.md) |  | [optional] 
**dynamic_click_tracker** | **bool** | Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert. | [optional] 
**end_time** | **datetime** |  | [optional] 
**event_tag_overrides** | [**List[EventTagOverride]**](EventTagOverride.md) | Event tag overrides for this ad. | [optional] 
**geo_targeting** | [**GeoTargeting**](GeoTargeting.md) |  | [optional] 
**id** | **str** | ID of this ad. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**key_value_targeting_expression** | [**KeyValueTargetingExpression**](KeyValueTargetingExpression.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#ad\&quot;. | [optional] 
**language_targeting** | [**LanguageTargeting**](LanguageTargeting.md) |  | [optional] 
**last_modified_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**name** | **str** | Name of this ad. This is a required field and must be less than 256 characters long. | [optional] 
**placement_assignments** | [**List[PlacementAssignment]**](PlacementAssignment.md) | Placement assignments for this ad. | [optional] 
**remarketing_list_expression** | [**ListTargetingExpression**](ListTargetingExpression.md) |  | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**ssl_compliant** | **bool** | Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. | [optional] 
**ssl_required** | **bool** | Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated. | [optional] 
**start_time** | **datetime** |  | [optional] 
**subaccount_id** | **str** | Subaccount ID of this ad. This is a read-only field that can be left blank. | [optional] 
**targeting_template_id** | **str** | Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD. | [optional] 
**technology_targeting** | [**TechnologyTargeting**](TechnologyTargeting.md) |  | [optional] 
**type** | **str** | Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource). | [optional] 

## Example

```python
from openapi_client.models.ad import Ad

# TODO update the JSON string below
json = "{}"
# create an instance of Ad from a JSON string
ad_instance = Ad.from_json(json)
# print the JSON string representation of the object
print(Ad.to_json())

# convert the object into a dict
ad_dict = ad_instance.to_dict()
# create an instance of Ad from a dict
ad_from_dict = Ad.from_dict(ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


