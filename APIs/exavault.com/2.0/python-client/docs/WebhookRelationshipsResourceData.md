# WebhookRelationshipsResourceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the resource associated with the webhook | [optional] 
**type** | **str** | Type of thing it is. \&quot;resource\&quot; | [optional] 

## Example

```python
from openapi_client.models.webhook_relationships_resource_data import WebhookRelationshipsResourceData

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookRelationshipsResourceData from a JSON string
webhook_relationships_resource_data_instance = WebhookRelationshipsResourceData.from_json(json)
# print the JSON string representation of the object
print(WebhookRelationshipsResourceData.to_json())

# convert the object into a dict
webhook_relationships_resource_data_dict = webhook_relationships_resource_data_instance.to_dict()
# create an instance of WebhookRelationshipsResourceData from a dict
webhook_relationships_resource_data_from_dict = WebhookRelationshipsResourceData.from_dict(webhook_relationships_resource_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


