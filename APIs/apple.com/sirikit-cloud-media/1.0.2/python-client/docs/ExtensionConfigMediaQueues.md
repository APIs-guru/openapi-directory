# ExtensionConfigMediaQueues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hdr** | **object** |  | [optional] 
**play_media** | [**ExtensionConfigMediaQueuesPlayMedia**](ExtensionConfigMediaQueuesPlayMedia.md) |  | [optional] 
**update_activity** | [**ExtensionConfigMediaQueuesUpdateActivity**](ExtensionConfigMediaQueuesUpdateActivity.md) |  | [optional] 

## Example

```python
from openapi_client.models.extension_config_media_queues import ExtensionConfigMediaQueues

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionConfigMediaQueues from a JSON string
extension_config_media_queues_instance = ExtensionConfigMediaQueues.from_json(json)
# print the JSON string representation of the object
print(ExtensionConfigMediaQueues.to_json())

# convert the object into a dict
extension_config_media_queues_dict = extension_config_media_queues_instance.to_dict()
# create an instance of ExtensionConfigMediaQueues from a dict
extension_config_media_queues_from_dict = ExtensionConfigMediaQueues.from_dict(extension_config_media_queues_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


