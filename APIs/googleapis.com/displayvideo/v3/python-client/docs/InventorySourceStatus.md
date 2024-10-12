# InventorySourceStatus

The status related settings of the inventory source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_status** | **str** | Output only. The configuration status of the inventory source. Only applicable for guaranteed inventory sources. Acceptable values are &#x60;INVENTORY_SOURCE_CONFIG_STATUS_PENDING&#x60; and &#x60;INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED&#x60;. An inventory source must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. | [optional] [readonly] 
**entity_pause_reason** | **str** | The user-provided reason for pausing this inventory source. Must not exceed 100 characters. Only applicable when entity_status is set to &#x60;ENTITY_STATUS_PAUSED&#x60;. | [optional] 
**entity_status** | **str** | Whether or not the inventory source is servable. Acceptable values are &#x60;ENTITY_STATUS_ACTIVE&#x60;, &#x60;ENTITY_STATUS_ARCHIVED&#x60;, and &#x60;ENTITY_STATUS_PAUSED&#x60;. Default value is &#x60;ENTITY_STATUS_ACTIVE&#x60;. | [optional] 
**seller_pause_reason** | **str** | Output only. The seller-provided reason for pausing this inventory source. Only applicable for inventory sources synced directly from the publishers and when seller_status is set to &#x60;ENTITY_STATUS_PAUSED&#x60;. | [optional] [readonly] 
**seller_status** | **str** | Output only. The status set by the seller for the inventory source. Only applicable for inventory sources synced directly from the publishers. Acceptable values are &#x60;ENTITY_STATUS_ACTIVE&#x60; and &#x60;ENTITY_STATUS_PAUSED&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.inventory_source_status import InventorySourceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySourceStatus from a JSON string
inventory_source_status_instance = InventorySourceStatus.from_json(json)
# print the JSON string representation of the object
print(InventorySourceStatus.to_json())

# convert the object into a dict
inventory_source_status_dict = inventory_source_status_instance.to_dict()
# create an instance of InventorySourceStatus from a dict
inventory_source_status_from_dict = InventorySourceStatus.from_dict(inventory_source_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


