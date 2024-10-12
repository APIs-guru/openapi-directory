# Creative

Contains properties of a Creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. | [optional] 
**active** | **bool** | Whether the creative is active. Applicable to all creative types. | [optional] 
**ad_parameters** | **str** | Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID. | [optional] 
**ad_tag_keys** | **List[str]** | Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**additional_sizes** | [**List[Size]**](Size.md) | Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this creative. This is a required field. Applicable to all creative types. | [optional] 
**allow_script_access** | **bool** | Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE. | [optional] 
**archived** | **bool** | Whether the creative is archived. Applicable to all creative types. | [optional] 
**artwork_type** | **str** | Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**authoring_source** | **str** | Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types. | [optional] 
**authoring_tool** | **str** | Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. | [optional] 
**auto_advance_images** | **bool** | Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY. | [optional] 
**background_color** | **str** | The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE. | [optional] 
**backup_image_click_through_url** | [**CreativeClickThroughUrl**](CreativeClickThroughUrl.md) |  | [optional] 
**backup_image_features** | **List[str]** | List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets&#39; detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. | [optional] 
**backup_image_reporting_label** | **str** | Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE. | [optional] 
**backup_image_target_window** | [**TargetWindow**](TargetWindow.md) |  | [optional] 
**click_tags** | [**List[ClickTag]**](ClickTag.md) | Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. | [optional] 
**commercial_id** | **str** | Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives. | [optional] 
**companion_creatives** | **List[str]** | List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false. | [optional] 
**compatibility** | **List[str]** | Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads developed with the VAST standard. Applicable to all creative types. Acceptable values are: - \&quot;APP\&quot; - \&quot;APP_INTERSTITIAL\&quot; - \&quot;IN_STREAM_VIDEO\&quot; - \&quot;IN_STREAM_AUDIO\&quot; - \&quot;DISPLAY\&quot; - \&quot;DISPLAY_INTERSTITIAL\&quot;  | [optional] 
**convert_flash_to_html5** | **bool** | Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don&#39;t want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. | [optional] 
**counter_custom_events** | [**List[CreativeCustomEvent]**](CreativeCustomEvent.md) | List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. | [optional] 
**creative_asset_selection** | [**CreativeAssetSelection**](CreativeAssetSelection.md) |  | [optional] 
**creative_assets** | [**List[CreativeAsset]**](CreativeAsset.md) | Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT | [optional] 
**creative_field_assignments** | [**List[CreativeFieldAssignment]**](CreativeFieldAssignment.md) | Creative field assignments for this creative. Applicable to all creative types. | [optional] 
**custom_key_values** | **List[str]** | Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**dynamic_asset_selection** | **bool** | Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives. | [optional] 
**exit_custom_events** | [**List[CreativeCustomEvent]**](CreativeCustomEvent.md) | List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. | [optional] 
**fs_command** | [**FsCommand**](FsCommand.md) |  | [optional] 
**html_code** | **str** | HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA. | [optional] 
**html_code_locked** | **bool** | Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. | [optional] 
**id** | **str** | ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creative\&quot;. | [optional] 
**last_modified_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**latest_trafficked_creative_id** | **str** | Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**media_description** | **str** | Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID. | [optional] 
**media_duration** | **float** | Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID. | [optional] 
**name** | **str** | Name of the creative. This is a required field and must be less than 256 characters long. Applicable to all creative types. | [optional] 
**oba_icon** | [**ObaIcon**](ObaIcon.md) |  | [optional] 
**override_css** | **str** | Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA. | [optional] 
**progress_offset** | [**VideoOffset**](VideoOffset.md) |  | [optional] 
**redirect_url** | **str** | URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT | [optional] 
**rendering_id** | **str** | ID of current rendering version. This is a read-only field. Applicable to all creative types. | [optional] 
**rendering_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**required_flash_plugin_version** | **str** | The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**required_flash_version** | **int** | The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**skip_offset** | [**VideoOffset**](VideoOffset.md) |  | [optional] 
**skippable** | **bool** | Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID. | [optional] 
**ssl_compliant** | **bool** | Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types. | [optional] 
**ssl_override** | **bool** | Whether creative should be treated as SSL compliant even if the system scan shows it&#39;s not. Applicable to all creative types. | [optional] 
**studio_advertiser_id** | **str** | Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**studio_creative_id** | **str** | Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**studio_trafficked_creative_id** | **str** | Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. | [optional] 
**third_party_backup_image_impressions_url** | **str** | Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA. | [optional] 
**third_party_rich_media_impressions_url** | **str** | Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA. | [optional] 
**third_party_urls** | [**List[ThirdPartyTrackingUrl]**](ThirdPartyTrackingUrl.md) | Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID. | [optional] 
**timer_custom_events** | [**List[CreativeCustomEvent]**](CreativeCustomEvent.md) | List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE. | [optional] 
**total_file_size** | **str** | Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. | [optional] 
**type** | **str** | Type of this creative. This is a required field. Applicable to all creative types. *Note:* FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types. | [optional] 
**universal_ad_id** | [**UniversalAdId**](UniversalAdId.md) |  | [optional] 
**version** | **int** | The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types. | [optional] 

## Example

```python
from openapi_client.models.creative import Creative

# TODO update the JSON string below
json = "{}"
# create an instance of Creative from a JSON string
creative_instance = Creative.from_json(json)
# print the JSON string representation of the object
print(Creative.to_json())

# convert the object into a dict
creative_dict = creative_instance.to_dict()
# create an instance of Creative from a dict
creative_from_dict = Creative.from_dict(creative_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


