# ExtensionConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hdr** | **object** |  | [optional] 
**intent** | [**ExtensionConfigIntent**](ExtensionConfigIntent.md) |  | 
**media** | [**ExtensionConfigMedia**](ExtensionConfigMedia.md) |  | 
**url** | **str** |  | [optional] 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.extension_config import ExtensionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionConfig from a JSON string
extension_config_instance = ExtensionConfig.from_json(json)
# print the JSON string representation of the object
print(ExtensionConfig.to_json())

# convert the object into a dict
extension_config_dict = extension_config_instance.to_dict()
# create an instance of ExtensionConfig from a dict
extension_config_from_dict = ExtensionConfig.from_dict(extension_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


