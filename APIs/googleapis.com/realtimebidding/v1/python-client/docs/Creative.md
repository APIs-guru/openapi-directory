# Creative

A creative and its classification data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Output only. ID of the buyer account that this creative is owned by. Can be used to filter the response of the creatives.list method with equality and inequality check. | [optional] [readonly] 
**ad_choices_destination_url** | **str** | The link to AdChoices destination page. This is only supported for native ads. | [optional] 
**advertiser_name** | **str** | The name of the company being advertised in the creative. Can be used to filter the response of the creatives.list method. | [optional] 
**agency_id** | **str** | The agency ID for this creative. | [optional] 
**api_update_time** | **str** | Output only. The last update timestamp of the creative through the API. | [optional] [readonly] 
**creative_format** | **str** | Output only. The format of this creative. Can be used to filter the response of the creatives.list method. | [optional] [readonly] 
**creative_id** | **str** | Buyer-specific creative ID that references this creative in bid responses. This field is Ignored in update operations. Can be used to filter the response of the creatives.list method. The maximum length of the creative ID is 128 bytes. | [optional] 
**creative_serving_decision** | [**CreativeServingDecision**](CreativeServingDecision.md) |  | [optional] 
**deal_ids** | **List[str]** | Output only. IDs of all of the deals with which this creative has been used in bidding. Can be used to filter the response of the creatives.list method. | [optional] [readonly] 
**declared_attributes** | **List[str]** | All declared attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. If the &#x60;excluded_attribute&#x60; field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto\&quot;) contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. | [optional] 
**declared_click_through_urls** | **List[str]** | The set of declared destination URLs for the creative. Can be used to filter the response of the creatives.list method. | [optional] 
**declared_restricted_categories** | **List[str]** | All declared restricted categories for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. | [optional] 
**declared_vendor_ids** | **List[int]** | IDs for the declared ad technology vendors that may be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. | [optional] 
**html** | [**HtmlContent**](HtmlContent.md) |  | [optional] 
**impression_tracking_urls** | **List[str]** | The set of URLs to be called to record an impression. | [optional] 
**name** | **str** | Output only. Name of the creative. Follows the pattern &#x60;buyers/{buyer}/creatives/{creative}&#x60;, where &#x60;{buyer}&#x60; represents the account ID of the buyer who owns the creative, and &#x60;{creative}&#x60; is the buyer-specific creative ID that references this creative in the bid response. | [optional] [readonly] 
**native** | [**NativeContent**](NativeContent.md) |  | [optional] 
**render_url** | **str** | Experimental field that can be used during the [FLEDGE Origin Trial](/authorized-buyers/rtb/fledge-origin-trial). The URL to fetch an interest group ad used in [TURTLEDOVE on-device auction](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#1-browsers-record-interest-groups\&quot;). This should be unique among all creatives for a given &#x60;accountId&#x60;. This URL should be the same as the URL returned by [generateBid()](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding). | [optional] 
**restricted_categories** | **List[str]** | All restricted categories for the ads that may be shown from this creative. | [optional] 
**version** | **int** | Output only. The version of the creative. Version for a new creative is 1 and it increments during subsequent creative updates. | [optional] [readonly] 
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


