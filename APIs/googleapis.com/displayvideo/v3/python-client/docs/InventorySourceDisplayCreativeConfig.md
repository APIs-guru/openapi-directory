# InventorySourceDisplayCreativeConfig

The configuration for display creatives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_size** | [**Dimensions**](Dimensions.md) |  | [optional] 

## Example

```python
from openapi_client.models.inventory_source_display_creative_config import InventorySourceDisplayCreativeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySourceDisplayCreativeConfig from a JSON string
inventory_source_display_creative_config_instance = InventorySourceDisplayCreativeConfig.from_json(json)
# print the JSON string representation of the object
print(InventorySourceDisplayCreativeConfig.to_json())

# convert the object into a dict
inventory_source_display_creative_config_dict = inventory_source_display_creative_config_instance.to_dict()
# create an instance of InventorySourceDisplayCreativeConfig from a dict
inventory_source_display_creative_config_from_dict = InventorySourceDisplayCreativeConfig.from_dict(inventory_source_display_creative_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


