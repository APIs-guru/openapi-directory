# Creative

A creative and its classification data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account that this creative belongs to. Can be used to filter the response of the creatives.list method. | [optional] 
**ad_choices_destination_url** | **str** | The link to AdChoices destination page. | [optional] 
**ad_technology_providers** | [**AdTechnologyProviders**](AdTechnologyProviders.md) |  | [optional] 
**advertiser_name** | **str** | The name of the company being advertised in the creative. | [optional] 
**agency_id** | **str** | The agency ID for this creative. | [optional] 
**api_update_time** | **str** | Output only. The last update timestamp of the creative through the API. | [optional] 
**attributes** | **List[str]** | All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. | [optional] 
**click_through_urls** | **List[str]** | The set of destination URLs for the creative. | [optional] 
**corrections** | [**List[Correction]**](Correction.md) | Output only. Shows any corrections that were applied to this creative. | [optional] 
**creative_id** | **str** | The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method. | [optional] 
**deals_status** | **str** | Output only. The top-level deals status of this creative. If disapproved, an entry for &#39;auctionType&#x3D;DIRECT_DEALS&#39; (or &#39;ALL&#39;) in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method. | [optional] 
**declared_click_through_urls** | **List[str]** | The set of declared destination URLs for the creative. | [optional] 
**detected_advertiser_ids** | **List[str]** | Output only. Detected advertiser IDs, if any. | [optional] 
**detected_domains** | **List[str]** | Output only. The detected domains for this creative. | [optional] 
**detected_languages** | **List[str]** | Output only. The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes. | [optional] 
**detected_product_categories** | **List[int]** | Output only. Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs. | [optional] 
**detected_sensitive_categories** | **List[int]** | Output only. Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids. | [optional] 
**html** | [**HtmlContent**](HtmlContent.md) |  | [optional] 
**impression_tracking_urls** | **List[str]** | The set of URLs to be called to record an impression. | [optional] 
**native** | [**NativeContent**](NativeContent.md) |  | [optional] 
**open_auction_status** | **str** | Output only. The top-level open auction status of this creative. If disapproved, an entry for &#39;auctionType &#x3D; OPEN_AUCTION&#39; (or &#39;ALL&#39;) in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method. | [optional] 
**restricted_categories** | **List[str]** | All restricted categories for the ads that may be shown from this creative. | [optional] 
**serving_restrictions** | [**List[ServingRestriction]**](ServingRestriction.md) | Output only. The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS versus HTTP request, or the type of auction). | [optional] 
**vendor_ids** | **List[int]** | All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. | [optional] 
**version** | **int** | Output only. The version of this creative. | [optional] 
**video** | [**VideoContent**](VideoContent.md) |  | [optional] 

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


