# GuaranteedOrder

A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_advertiser_id** | **str** | Output only. The ID of default advertiser of the guaranteed order. The default advertiser is either the read_write_advertiser_id or, if that is not set, the first advertiser listed in read_advertiser_ids. Otherwise, there is no default advertiser. | [optional] [readonly] 
**default_campaign_id** | **str** | The ID of the default campaign that is assigned to the guaranteed order. The default campaign must belong to the default advertiser. | [optional] 
**display_name** | **str** | Required. The display name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**exchange** | **str** | Required. Immutable. The exchange where the guaranteed order originated. | [optional] 
**guaranteed_order_id** | **str** | Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format &#x60;{exchange}-{legacy_guaranteed_order_id}&#x60;. | [optional] [readonly] 
**legacy_guaranteed_order_id** | **str** | Output only. The legacy ID of the guaranteed order. Assigned by the original exchange. The legacy ID is unique within one exchange, but is not guaranteed to be unique across all guaranteed orders. This ID is used in SDF and UI. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the guaranteed order. | [optional] [readonly] 
**publisher_name** | **str** | Required. The publisher name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**read_access_inherited** | **bool** | Whether all advertisers of read_write_partner_id have read access to the guaranteed order. Only applicable if read_write_partner_id is set. If True, overrides read_advertiser_ids. | [optional] 
**read_advertiser_ids** | **List[str]** | The IDs of advertisers with read access to the guaranteed order. This field must not include the advertiser assigned to read_write_advertiser_id if it is set. All advertisers in this field must belong to read_write_partner_id or the same partner as read_write_advertiser_id. | [optional] 
**read_write_advertiser_id** | **str** | The advertiser with read/write access to the guaranteed order. This is also the default advertiser of the guaranteed order. | [optional] 
**read_write_partner_id** | **str** | The partner with read/write access to the guaranteed order. | [optional] 
**status** | [**GuaranteedOrderStatus**](GuaranteedOrderStatus.md) |  | [optional] 
**update_time** | **str** | Output only. The timestamp when the guaranteed order was last updated. Assigned by the system. | [optional] [readonly] 

## Example

```python
from openapi_client.models.guaranteed_order import GuaranteedOrder

# TODO update the JSON string below
json = "{}"
# create an instance of GuaranteedOrder from a JSON string
guaranteed_order_instance = GuaranteedOrder.from_json(json)
# print the JSON string representation of the object
print(GuaranteedOrder.to_json())

# convert the object into a dict
guaranteed_order_dict = guaranteed_order_instance.to_dict()
# create an instance of GuaranteedOrder from a dict
guaranteed_order_from_dict = GuaranteedOrder.from_dict(guaranteed_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


