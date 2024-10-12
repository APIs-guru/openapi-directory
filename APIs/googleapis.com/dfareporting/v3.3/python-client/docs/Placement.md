# Placement

Contains properties of a placement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this placement. This field can be left blank. | [optional] 
**ad_blocking_opt_out** | **bool** | Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect. | [optional] 
**additional_sizes** | [**List[Size]**](Size.md) | Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this placement. This field can be left blank. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**archived** | **bool** | Whether this placement is archived. | [optional] 
**campaign_id** | **str** | Campaign ID of this placement. This field is a required field on insertion. | [optional] 
**campaign_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**comment** | **str** | Comments for this placement. | [optional] 
**compatibility** | **str** | Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion. | [optional] 
**content_category_id** | **str** | ID of the content category assigned to this placement. | [optional] 
**create_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**directory_site_id** | **str** | Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. | [optional] 
**directory_site_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**external_id** | **str** | External ID for this placement. | [optional] 
**id** | **str** | ID of this placement. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**key_name** | **str** | Key name of this placement. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#placement\&quot;. | [optional] 
**last_modified_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**lookback_configuration** | [**LookbackConfiguration**](LookbackConfiguration.md) |  | [optional] 
**name** | **str** | Name of this placement.This is a required field and must be less than or equal to 256 characters long. | [optional] 
**payment_approved** | **bool** | Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements. | [optional] 
**payment_source** | **str** | Payment source for this placement. This is a required field that is read-only after insertion. | [optional] 
**placement_group_id** | **str** | ID of this placement&#39;s group, if applicable. | [optional] 
**placement_group_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**placement_strategy_id** | **str** | ID of the placement strategy assigned to this placement. | [optional] 
**pricing_schedule** | [**PricingSchedule**](PricingSchedule.md) |  | [optional] 
**primary** | **bool** | Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock&#39;s primaryPlacementId field to the ID of this placement. | [optional] 
**publisher_update_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**site_id** | **str** | Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. | [optional] 
**site_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**ssl_required** | **bool** | Whether creatives assigned to this placement must be SSL-compliant. | [optional] 
**status** | **str** | Third-party placement status. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this placement. This field can be left blank. | [optional] 
**tag_formats** | **List[str]** | Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - \&quot;PLACEMENT_TAG_STANDARD\&quot; - \&quot;PLACEMENT_TAG_IFRAME_JAVASCRIPT\&quot; - \&quot;PLACEMENT_TAG_IFRAME_ILAYER\&quot; - \&quot;PLACEMENT_TAG_INTERNAL_REDIRECT\&quot; - \&quot;PLACEMENT_TAG_JAVASCRIPT\&quot; - \&quot;PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT\&quot; - \&quot;PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT\&quot; - \&quot;PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT\&quot; - \&quot;PLACEMENT_TAG_CLICK_COMMANDS\&quot; - \&quot;PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH\&quot; - \&quot;PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3\&quot; - \&quot;PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4\&quot; - \&quot;PLACEMENT_TAG_TRACKING\&quot; - \&quot;PLACEMENT_TAG_TRACKING_IFRAME\&quot; - \&quot;PLACEMENT_TAG_TRACKING_JAVASCRIPT\&quot;  | [optional] 
**tag_setting** | [**TagSetting**](TagSetting.md) |  | [optional] 
**video_active_view_opt_out** | **bool** | Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView. | [optional] 
**video_settings** | [**VideoSettings**](VideoSettings.md) |  | [optional] 
**vpaid_adapter_choice** | **str** | VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. | [optional] 

## Example

```python
from openapi_client.models.placement import Placement

# TODO update the JSON string below
json = "{}"
# create an instance of Placement from a JSON string
placement_instance = Placement.from_json(json)
# print the JSON string representation of the object
print(Placement.to_json())

# convert the object into a dict
placement_dict = placement_instance.to_dict()
# create an instance of Placement from a dict
placement_from_dict = Placement.from_dict(placement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


