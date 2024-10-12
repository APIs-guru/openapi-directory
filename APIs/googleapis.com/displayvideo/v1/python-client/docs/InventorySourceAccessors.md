# InventorySourceAccessors

The partner or advertisers with access to the inventory source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertisers** | [**InventorySourceAccessorsAdvertiserAccessors**](InventorySourceAccessorsAdvertiserAccessors.md) |  | [optional] 
**partner** | [**InventorySourceAccessorsPartnerAccessor**](InventorySourceAccessorsPartnerAccessor.md) |  | [optional] 

## Example

```python
from openapi_client.models.inventory_source_accessors import InventorySourceAccessors

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySourceAccessors from a JSON string
inventory_source_accessors_instance = InventorySourceAccessors.from_json(json)
# print the JSON string representation of the object
print(InventorySourceAccessors.to_json())

# convert the object into a dict
inventory_source_accessors_dict = inventory_source_accessors_instance.to_dict()
# create an instance of InventorySourceAccessors from a dict
inventory_source_accessors_from_dict = InventorySourceAccessors.from_dict(inventory_source_accessors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


