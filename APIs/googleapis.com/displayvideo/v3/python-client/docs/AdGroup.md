# AdGroup

A single ad group associated with a line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_format** | **str** | The format of the ads in the ad group. | [optional] 
**ad_group_id** | **str** | The unique ID of the ad group. Assigned by the system. | [optional] 
**advertiser_id** | **str** | The unique ID of the advertiser the ad group belongs to. | [optional] 
**bid_strategy** | [**BiddingStrategy**](BiddingStrategy.md) |  | [optional] 
**display_name** | **str** | The display name of the ad group. Must be UTF-8 encoded with a maximum size of 255 bytes. | [optional] 
**entity_status** | **str** | Controls whether or not the ad group can spend its budget and bid on inventory. If the ad group&#39;s parent line item is not active, the ad group can&#39;t spend its budget even if its own status is &#x60;ENTITY_STATUS_ACTIVE&#x60;. | [optional] 
**line_item_id** | **str** | The unique ID of the line item that the ad group belongs to. | [optional] 
**name** | **str** | The resource name of the ad group. | [optional] 
**product_feed_data** | [**ProductFeedData**](ProductFeedData.md) |  | [optional] 
**targeting_expansion** | [**TargetingExpansionConfig**](TargetingExpansionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.ad_group import AdGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AdGroup from a JSON string
ad_group_instance = AdGroup.from_json(json)
# print the JSON string representation of the object
print(AdGroup.to_json())

# convert the object into a dict
ad_group_dict = ad_group_instance.to_dict()
# create an instance of AdGroup from a dict
ad_group_from_dict = AdGroup.from_dict(ad_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


