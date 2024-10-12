# Creative

A creative and its classification data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_snippet** | **str** | The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set. | [optional] 
**account_id** | **int** | Account id. | [optional] 
**ad_choices_destination_url** | **str** | The link to the Ad Preferences page. This is only supported for native ads. | [optional] 
**ad_technology_providers** | [**CreativeAdTechnologyProviders**](CreativeAdTechnologyProviders.md) |  | [optional] 
**advertiser_id** | **List[str]** | Detected advertiser id, if any. Read-only. This field should not be set in requests. | [optional] 
**advertiser_name** | **str** | The name of the company being advertised in the creative. A list of advertisers is provided in the advertisers.txt file. | [optional] 
**agency_id** | **str** | The agency id for this creative. | [optional] 
**api_upload_timestamp** | **datetime** | The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp). | [optional] 
**attribute** | **List[int]** | List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt. | [optional] 
**buyer_creative_id** | **str** | A buyer-specific id identifying the creative in this ad. | [optional] 
**click_through_url** | **List[str]** | The set of destination urls for the snippet. | [optional] 
**corrections** | [**List[CreativeCorrectionsInner]**](CreativeCorrectionsInner.md) | Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests. | [optional] 
**creative_status_identity_type** | **str** | Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole. | [optional] 
**deals_status** | **str** | Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType&#x3D;DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly. | [optional] 
**detected_domains** | **List[str]** | Detected domains for this creative. Read-only. This field should not be set in requests. | [optional] 
**filtering_reasons** | [**CreativeFilteringReasons**](CreativeFilteringReasons.md) |  | [optional] 
**height** | **int** | Ad height. | [optional] 
**impression_tracking_url** | **List[str]** | The set of urls to be called to record an impression. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#creative']
**languages** | **List[str]** | Detected languages for this creative. Read-only. This field should not be set in requests. | [optional] 
**native_ad** | [**CreativeNativeAd**](CreativeNativeAd.md) |  | [optional] 
**open_auction_status** | **str** | Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType&#x3D;OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly. | [optional] 
**product_categories** | **List[int]** | Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests. | [optional] 
**restricted_categories** | **List[int]** | All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt. | [optional] 
**sensitive_categories** | **List[int]** | Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests. | [optional] 
**serving_restrictions** | [**List[CreativeServingRestrictionsInner]**](CreativeServingRestrictionsInner.md) | The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details. | [optional] 
**vendor_type** | **List[int]** | List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt. | [optional] 
**version** | **int** | The version for this creative. Read-only. This field should not be set in requests. | [optional] 
**video_url** | **str** | The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above. | [optional] 
**video_vast_xml** | **str** | The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set. | [optional] 
**width** | **int** | Ad width. | [optional] 

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


