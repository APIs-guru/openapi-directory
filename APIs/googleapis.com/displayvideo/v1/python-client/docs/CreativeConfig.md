# CreativeConfig

Creative requirements configuration for the inventory source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_type** | **str** | The type of creative that can be assigned to the inventory source. Only the following types are supported: * &#x60;CREATIVE_TYPE_STANDARD&#x60; * &#x60;CREATIVE_TYPE_VIDEO&#x60; | [optional] 
**display_creative_config** | [**InventorySourceDisplayCreativeConfig**](InventorySourceDisplayCreativeConfig.md) |  | [optional] 
**video_creative_config** | [**InventorySourceVideoCreativeConfig**](InventorySourceVideoCreativeConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.creative_config import CreativeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeConfig from a JSON string
creative_config_instance = CreativeConfig.from_json(json)
# print the JSON string representation of the object
print(CreativeConfig.to_json())

# convert the object into a dict
creative_config_dict = creative_config_instance.to_dict()
# create an instance of CreativeConfig from a dict
creative_config_from_dict = CreativeConfig.from_dict(creative_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


