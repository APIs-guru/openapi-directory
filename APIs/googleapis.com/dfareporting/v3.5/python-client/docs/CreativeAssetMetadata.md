# CreativeAssetMetadata

CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_identifier** | [**CreativeAssetId**](CreativeAssetId.md) |  | [optional] 
**click_tags** | [**List[ClickTag]**](ClickTag.md) | List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset. | [optional] 
**counter_custom_events** | [**List[CreativeCustomEvent]**](CreativeCustomEvent.md) | List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. | [optional] 
**detected_features** | **List[str]** | List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. | [optional] 
**exit_custom_events** | [**List[CreativeCustomEvent]**](CreativeCustomEvent.md) | List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. | [optional] 
**id** | **str** | Numeric ID of the asset. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creativeAssetMetadata\&quot;. | [optional] 
**media_request_info** | [**MediaRequestInfo**](MediaRequestInfo.md) |  | [optional] 
**media_response_info** | [**MediaResponseInfo**](MediaResponseInfo.md) |  | [optional] 
**rich_media** | **bool** | True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field. | [optional] 
**timer_custom_events** | [**List[CreativeCustomEvent]**](CreativeCustomEvent.md) | List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. | [optional] 
**warned_validation_rules** | **List[str]** | Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible values are: - \&quot;ADMOB_REFERENCED\&quot; - \&quot;ASSET_FORMAT_UNSUPPORTED_DCM\&quot; - \&quot;ASSET_INVALID\&quot; - \&quot;CLICK_TAG_HARD_CODED\&quot; - \&quot;CLICK_TAG_INVALID\&quot; - \&quot;CLICK_TAG_IN_GWD\&quot; - \&quot;CLICK_TAG_MISSING\&quot; - \&quot;CLICK_TAG_MORE_THAN_ONE\&quot; - \&quot;CLICK_TAG_NON_TOP_LEVEL\&quot; - \&quot;COMPONENT_UNSUPPORTED_DCM\&quot; - \&quot;ENABLER_UNSUPPORTED_METHOD_DCM\&quot; - \&quot;EXTERNAL_FILE_REFERENCED\&quot; - \&quot;FILE_DETAIL_EMPTY\&quot; - \&quot;FILE_TYPE_INVALID\&quot; - \&quot;GWD_PROPERTIES_INVALID\&quot; - \&quot;HTML5_FEATURE_UNSUPPORTED\&quot; - \&quot;LINKED_FILE_NOT_FOUND\&quot; - \&quot;MAX_FLASH_VERSION_11\&quot; - \&quot;MRAID_REFERENCED\&quot; - \&quot;NOT_SSL_COMPLIANT\&quot; - \&quot;ORPHANED_ASSET\&quot; - \&quot;PRIMARY_HTML_MISSING\&quot; - \&quot;SVG_INVALID\&quot; - \&quot;ZIP_INVALID\&quot;  | [optional] 

## Example

```python
from openapi_client.models.creative_asset_metadata import CreativeAssetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeAssetMetadata from a JSON string
creative_asset_metadata_instance = CreativeAssetMetadata.from_json(json)
# print the JSON string representation of the object
print(CreativeAssetMetadata.to_json())

# convert the object into a dict
creative_asset_metadata_dict = creative_asset_metadata_instance.to_dict()
# create an instance of CreativeAssetMetadata from a dict
creative_asset_metadata_from_dict = CreativeAssetMetadata.from_dict(creative_asset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


