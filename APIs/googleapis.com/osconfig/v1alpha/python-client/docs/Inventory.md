# Inventory

This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Dict[str, InventoryItem]**](InventoryItem.md) | Output only. Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version. | [optional] [readonly] 
**name** | **str** | Output only. The &#x60;Inventory&#x60; API resource name. Format: &#x60;projects/{project_number}/locations/{location}/instances/{instance_id}/inventory&#x60; | [optional] [readonly] 
**os_info** | [**InventoryOsInfo**](InventoryOsInfo.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp of the last reported inventory for the VM. | [optional] [readonly] 

## Example

```python
from openapi_client.models.inventory import Inventory

# TODO update the JSON string below
json = "{}"
# create an instance of Inventory from a JSON string
inventory_instance = Inventory.from_json(json)
# print the JSON string representation of the object
print(Inventory.to_json())

# convert the object into a dict
inventory_dict = inventory_instance.to_dict()
# create an instance of Inventory from a dict
inventory_from_dict = Inventory.from_dict(inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


