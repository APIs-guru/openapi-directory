# WebhookRelationshipsResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**WebhookRelationshipsResourceData**](WebhookRelationshipsResourceData.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_relationships_resource import WebhookRelationshipsResource

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookRelationshipsResource from a JSON string
webhook_relationships_resource_instance = WebhookRelationshipsResource.from_json(json)
# print the JSON string representation of the object
print(WebhookRelationshipsResource.to_json())

# convert the object into a dict
webhook_relationships_resource_dict = webhook_relationships_resource_instance.to_dict()
# create an instance of WebhookRelationshipsResource from a dict
webhook_relationships_resource_from_dict = WebhookRelationshipsResource.from_dict(webhook_relationships_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


