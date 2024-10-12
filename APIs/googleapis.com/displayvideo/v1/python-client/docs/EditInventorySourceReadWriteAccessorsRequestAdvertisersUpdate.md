# EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate

Update to the list of advertisers with read/write access to the inventory source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_advertisers** | **List[str]** | The advertisers to add. | [optional] 
**removed_advertisers** | **List[str]** | The advertisers to remove. | [optional] 

## Example

```python
from openapi_client.models.edit_inventory_source_read_write_accessors_request_advertisers_update import EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate from a JSON string
edit_inventory_source_read_write_accessors_request_advertisers_update_instance = EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate.from_json(json)
# print the JSON string representation of the object
print(EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate.to_json())

# convert the object into a dict
edit_inventory_source_read_write_accessors_request_advertisers_update_dict = edit_inventory_source_read_write_accessors_request_advertisers_update_instance.to_dict()
# create an instance of EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate from a dict
edit_inventory_source_read_write_accessors_request_advertisers_update_from_dict = EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate.from_dict(edit_inventory_source_read_write_accessors_request_advertisers_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


