# WebhookProperties

Definition of the webhook properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time. | [optional] 
**description** | **str** | Gets or sets the description. | [optional] 
**expiry_time** | **datetime** | Gets or sets the expiry time. | [optional] 
**is_enabled** | **bool** | Gets or sets the value of the enabled flag of the webhook. | [optional] [default to False]
**last_invoked_time** | **datetime** | Gets or sets the last invoked time. | [optional] 
**last_modified_by** | **str** | Details of the user who last modified the Webhook | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with. | [optional] 
**run_on** | **str** | Gets or sets the name of the hybrid worker group the webhook job will run on. | [optional] 
**runbook** | [**RunbookAssociationProperty**](RunbookAssociationProperty.md) |  | [optional] 
**uri** | **str** | Gets or sets the webhook uri. | [optional] 

## Example

```python
from openapi_client.models.webhook_properties import WebhookProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookProperties from a JSON string
webhook_properties_instance = WebhookProperties.from_json(json)
# print the JSON string representation of the object
print(WebhookProperties.to_json())

# convert the object into a dict
webhook_properties_dict = webhook_properties_instance.to_dict()
# create an instance of WebhookProperties from a dict
webhook_properties_from_dict = WebhookProperties.from_dict(webhook_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


