# Brand

Brand-level icon and display name configuration. Once approved, the icon and display name appear in the search results for properties that the partner has assigned to this brand.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_display_names** | [**List[LocalizedText]**](LocalizedText.md) | Output only. The brand&#39;s active display names in all provided languages, only present if the display name is approved for all provided languages. | [optional] [readonly] 
**active_icon** | **str** | Output only. The brand&#39;s active [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons&#39;s resource name in the format &#x60;accounts/{account_id}/icons/{icon_id}&#x60;. An active icon is one that has been approved. | [optional] [readonly] 
**active_icon_uri** | **str** | Output only. URL of the active icon, only present when the icon has been approved. | [optional] [readonly] 
**display_name_disapproval_reason** | [**List[DisplayNameDisapprovalReason]**](DisplayNameDisapprovalReason.md) | Output only. Display name&#39;s disapproval reason. Only applies to display names with the review state &#39;REJECTED&#39;. | [optional] [readonly] 
**display_name_state** | **str** | Output only. The brand&#39;s display names review state, which applies to all display name language entries. If there are both submitted and active display names, this refers to the submitted display names. | [optional] [readonly] 
**display_names** | [**List[LocalizedText]**](LocalizedText.md) | Input only. The name Google displays for the brand&#39;s properties. Setting the display names is only necessary if you want to override the landing page display name or account-level display name for the brand. Google reviews the display names for appropriate content. When there are multiple languages, Google will only show the display names once Google approves all the languages. | [optional] 
**icon** | **str** | Input only. The brand&#39;s [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand&#39;s icon. The value refers to the icons&#39;s resource name in the format &#x60;accounts/{account_id}/icons/{icon_id}&#x60;. | [optional] 
**icon_disapproval_reasons** | **List[str]** | Output only. The icon&#39;s disapproval reason(s). Only applies to submitted icons with &#x60;REJECTED&#x60; state. | [optional] [readonly] 
**icon_state** | **str** | Output only. The brand&#39;s icon&#39;s review state. If there are both submitted and active icons, this refers to the submitted icon. | [optional] [readonly] 
**name** | **str** | Output only. The resource name for the brand in the format &#x60;accounts/{account_id}/brands/{brand_id}&#x60;. The &#x60;brand_id&#x60; corresponds to the partner&#39;s brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The &#x60;brand_id&#x60; of the default brand is &#x60;NO_BRAND_ID&#x60;. It can be fetched and updated like any configured brand. | [optional] [readonly] 
**property_count** | **str** | Output only. The number of properties with the corresponding brand ID. | [optional] [readonly] 
**submitted_display_names** | [**List[LocalizedText]**](LocalizedText.md) | Output only. The brand&#39;s submitted display names in all provided languages, only present if the display name is new or rejected for any language. | [optional] [readonly] 
**submitted_icon** | **str** | Output only. The brand&#39;s submitted [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons&#39;s resource name in the format &#x60;accounts/{account_id}/icons/{icon_id}&#x60;. A submitted icon is one that is new or rejected. | [optional] [readonly] 

## Example

```python
from openapi_client.models.brand import Brand

# TODO update the JSON string below
json = "{}"
# create an instance of Brand from a JSON string
brand_instance = Brand.from_json(json)
# print the JSON string representation of the object
print(Brand.to_json())

# convert the object into a dict
brand_dict = brand_instance.to_dict()
# create an instance of Brand from a dict
brand_from_dict = Brand.from_dict(brand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


