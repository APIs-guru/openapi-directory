# WebhookTriggersResources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compress** | **bool** | Send webhook messages when resources are compressed into an archive. | [optional] 
**copy** | **bool** | Send webhook messages when resources are copied. | [optional] 
**create_folder** | **bool** | Send webhook messages when a new folder is created. | [optional] 
**delete** | **bool** | Send webhook messages when resources are deleted | [optional] 
**download** | **bool** | Send webhook messages when resources are downloaded. | [optional] 
**extract** | **bool** | Send webhook messages when resources are extracted from an archive. | [optional] 
**move** | **bool** | Send webhook messages when resources are moved. | [optional] 
**rename** | **bool** | Send webhook messages when resources are renamed. | [optional] 
**upload** | **bool** | Send webhook messages when resources are uploaded. | [optional] 

## Example

```python
from openapi_client.models.webhook_triggers_resources import WebhookTriggersResources

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookTriggersResources from a JSON string
webhook_triggers_resources_instance = WebhookTriggersResources.from_json(json)
# print the JSON string representation of the object
print(WebhookTriggersResources.to_json())

# convert the object into a dict
webhook_triggers_resources_dict = webhook_triggers_resources_instance.to_dict()
# create an instance of WebhookTriggersResources from a dict
webhook_triggers_resources_from_dict = WebhookTriggersResources.from_dict(webhook_triggers_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


