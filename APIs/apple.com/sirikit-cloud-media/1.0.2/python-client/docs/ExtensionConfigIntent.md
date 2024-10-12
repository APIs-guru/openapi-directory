# ExtensionConfigIntent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_media** | [**ExtensionConfigIntentAddMedia**](ExtensionConfigIntentAddMedia.md) |  | [optional] 
**hdr** | **object** |  | [optional] 
**play_media** | [**ExtensionConfigIntentPlayMedia**](ExtensionConfigIntentPlayMedia.md) |  | 
**update_media_affinity** | [**ExtensionConfigIntentUpdateMediaAffinity**](ExtensionConfigIntentUpdateMediaAffinity.md) |  | [optional] 

## Example

```python
from openapi_client.models.extension_config_intent import ExtensionConfigIntent

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionConfigIntent from a JSON string
extension_config_intent_instance = ExtensionConfigIntent.from_json(json)
# print the JSON string representation of the object
print(ExtensionConfigIntent.to_json())

# convert the object into a dict
extension_config_intent_dict = extension_config_intent_instance.to_dict()
# create an instance of ExtensionConfigIntent from a dict
extension_config_intent_from_dict = ExtensionConfigIntent.from_dict(extension_config_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


