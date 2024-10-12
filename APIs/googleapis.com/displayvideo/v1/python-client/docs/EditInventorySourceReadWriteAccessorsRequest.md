# EditInventorySourceReadWriteAccessorsRequest

Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertisers_update** | [**EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate**](EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate.md) |  | [optional] 
**assign_partner** | **bool** | Set the partner context as read/write accessor of the inventory source. This will remove all other current read/write advertiser accessors. | [optional] 
**partner_id** | **str** | Required. The partner context by which the accessors change is being made. | [optional] 

## Example

```python
from openapi_client.models.edit_inventory_source_read_write_accessors_request import EditInventorySourceReadWriteAccessorsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditInventorySourceReadWriteAccessorsRequest from a JSON string
edit_inventory_source_read_write_accessors_request_instance = EditInventorySourceReadWriteAccessorsRequest.from_json(json)
# print the JSON string representation of the object
print(EditInventorySourceReadWriteAccessorsRequest.to_json())

# convert the object into a dict
edit_inventory_source_read_write_accessors_request_dict = edit_inventory_source_read_write_accessors_request_instance.to_dict()
# create an instance of EditInventorySourceReadWriteAccessorsRequest from a dict
edit_inventory_source_read_write_accessors_request_from_dict = EditInventorySourceReadWriteAccessorsRequest.from_dict(edit_inventory_source_read_write_accessors_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


