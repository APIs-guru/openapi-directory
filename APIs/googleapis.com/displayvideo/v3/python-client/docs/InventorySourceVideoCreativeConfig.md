# InventorySourceVideoCreativeConfig

The configuration for video creatives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The duration requirements for the video creatives that can be assigned to the inventory source. | [optional] 

## Example

```python
from openapi_client.models.inventory_source_video_creative_config import InventorySourceVideoCreativeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySourceVideoCreativeConfig from a JSON string
inventory_source_video_creative_config_instance = InventorySourceVideoCreativeConfig.from_json(json)
# print the JSON string representation of the object
print(InventorySourceVideoCreativeConfig.to_json())

# convert the object into a dict
inventory_source_video_creative_config_dict = inventory_source_video_creative_config_instance.to_dict()
# create an instance of InventorySourceVideoCreativeConfig from a dict
inventory_source_video_creative_config_from_dict = InventorySourceVideoCreativeConfig.from_dict(inventory_source_video_creative_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


