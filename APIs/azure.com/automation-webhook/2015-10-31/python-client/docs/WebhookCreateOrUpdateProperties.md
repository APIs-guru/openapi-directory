# WebhookCreateOrUpdateProperties

The properties of the create webhook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_time** | **datetime** | Gets or sets the expiry time. | [optional] 
**is_enabled** | **bool** | Gets or sets the value of the enabled flag of webhook. | [optional] 
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the job. | [optional] 
**run_on** | **str** | Gets or sets the name of the hybrid worker group the webhook job will run on. | [optional] 
**runbook** | [**RunbookAssociationProperty**](RunbookAssociationProperty.md) |  | [optional] 
**uri** | **str** | Gets or sets the uri. | [optional] 

## Example

```python
from openapi_client.models.webhook_create_or_update_properties import WebhookCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookCreateOrUpdateProperties from a JSON string
webhook_create_or_update_properties_instance = WebhookCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(WebhookCreateOrUpdateProperties.to_json())

# convert the object into a dict
webhook_create_or_update_properties_dict = webhook_create_or_update_properties_instance.to_dict()
# create an instance of WebhookCreateOrUpdateProperties from a dict
webhook_create_or_update_properties_from_dict = WebhookCreateOrUpdateProperties.from_dict(webhook_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


