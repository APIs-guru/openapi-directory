# WebhookRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_account** | [**WebhookRelationshipsOwnerAccount**](WebhookRelationshipsOwnerAccount.md) |  | [optional] 
**resource** | [**WebhookRelationshipsResource**](WebhookRelationshipsResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_relationships import WebhookRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookRelationships from a JSON string
webhook_relationships_instance = WebhookRelationships.from_json(json)
# print the JSON string representation of the object
print(WebhookRelationships.to_json())

# convert the object into a dict
webhook_relationships_dict = webhook_relationships_instance.to_dict()
# create an instance of WebhookRelationships from a dict
webhook_relationships_from_dict = WebhookRelationships.from_dict(webhook_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


