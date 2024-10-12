# InventorySource

An inventory source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment** | **str** | Whether the inventory source has a guaranteed or non-guaranteed delivery. | [optional] 
**creative_configs** | [**List[CreativeConfig]**](CreativeConfig.md) | The creative requirements of the inventory source. Not applicable for auction packages. | [optional] 
**deal_id** | **str** | The ID in the exchange space that uniquely identifies the inventory source. Must be unique across buyers within each exchange but not necessarily unique across exchanges. | [optional] 
**delivery_method** | **str** | The delivery method of the inventory source. * For non-guaranteed inventory sources, the only acceptable value is &#x60;INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC&#x60;. * For guaranteed inventory sources, acceptable values are &#x60;INVENTORY_SOURCE_DELIVERY_METHOD_TAG&#x60; and &#x60;INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC&#x60;. | [optional] 
**display_name** | **str** | The display name of the inventory source. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**exchange** | **str** | The exchange to which the inventory source belongs. | [optional] 
**guaranteed_order_id** | **str** | Immutable. The ID of the guaranteed order that this inventory source belongs to. Only applicable when commitment is &#x60;INVENTORY_SOURCE_COMMITMENT_GUARANTEED&#x60;. | [optional] 
**inventory_source_id** | **str** | Output only. The unique ID of the inventory source. Assigned by the system. | [optional] [readonly] 
**inventory_source_product_type** | **str** | Output only. The product type of the inventory source, denoting the way through which it sells inventory. | [optional] [readonly] 
**inventory_source_type** | **str** | Denotes the type of the inventory source. | [optional] 
**name** | **str** | Output only. The resource name of the inventory source. | [optional] [readonly] 
**publisher_name** | **str** | The publisher/seller name of the inventory source. | [optional] 
**rate_details** | [**RateDetails**](RateDetails.md) |  | [optional] 
**read_advertiser_ids** | **List[str]** | Output only. The IDs of advertisers with read-only access to the inventory source. | [optional] [readonly] 
**read_partner_ids** | **List[str]** | Output only. The IDs of partners with read-only access to the inventory source. All advertisers of partners in this field inherit read-only access to the inventory source. | [optional] [readonly] 
**read_write_accessors** | [**InventorySourceAccessors**](InventorySourceAccessors.md) |  | [optional] 
**status** | [**InventorySourceStatus**](InventorySourceStatus.md) |  | [optional] 
**time_range** | [**TimeRange**](TimeRange.md) |  | [optional] 
**update_time** | **str** | Output only. The timestamp when the inventory source was last updated. Assigned by the system. | [optional] [readonly] 

## Example

```python
from openapi_client.models.inventory_source import InventorySource

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySource from a JSON string
inventory_source_instance = InventorySource.from_json(json)
# print the JSON string representation of the object
print(InventorySource.to_json())

# convert the object into a dict
inventory_source_dict = inventory_source_instance.to_dict()
# create an instance of InventorySource from a dict
inventory_source_from_dict = InventorySource.from_dict(inventory_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


