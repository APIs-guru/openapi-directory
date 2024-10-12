# YoutubeAdGroup

A single YouTube ad group associated with a YouTube and Partners line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_format** | **str** | The format of the ads in the ad group. | [optional] 
**ad_group_id** | **str** | The unique ID of the ad group. Assigned by the system. | [optional] 
**advertiser_id** | **str** | The unique ID of the advertiser the ad group belongs to. | [optional] 
**bidding_strategy** | [**YoutubeAndPartnersBiddingStrategy**](YoutubeAndPartnersBiddingStrategy.md) |  | [optional] 
**display_name** | **str** | The display name of the ad group. Must be UTF-8 encoded with a maximum size of 255 bytes. | [optional] 
**entity_status** | **str** | Controls whether or not the ad group can spend its budget and bid on inventory. If the ad group&#39;s parent line item is not active, the ad group can&#39;t spend its budget even if its own status is &#x60;ENTITY_STATUS_ACTIVE&#x60;. | [optional] 
**line_item_id** | **str** | The unique ID of the line item that the ad group belongs to. | [optional] 
**name** | **str** | The resource name of the ad group. | [optional] 
**product_feed_data** | [**ProductFeedData**](ProductFeedData.md) |  | [optional] 
**targeting_expansion** | [**TargetingExpansionConfig**](TargetingExpansionConfig.md) |  | [optional] 
**youtube_ad_ids** | **List[str]** | The IDs of the youtube_ad_group_ad resources associated with the ad group. | [optional] 

## Example

```python
from openapi_client.models.youtube_ad_group import YoutubeAdGroup

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeAdGroup from a JSON string
youtube_ad_group_instance = YoutubeAdGroup.from_json(json)
# print the JSON string representation of the object
print(YoutubeAdGroup.to_json())

# convert the object into a dict
youtube_ad_group_dict = youtube_ad_group_instance.to_dict()
# create an instance of YoutubeAdGroup from a dict
youtube_ad_group_from_dict = YoutubeAdGroup.from_dict(youtube_ad_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


