# WebhookCreateOrUpdateParameters

The parameters supplied to the create or update webhook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the webhook. | 
**properties** | [**WebhookCreateOrUpdateProperties**](WebhookCreateOrUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.webhook_create_or_update_parameters import WebhookCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookCreateOrUpdateParameters from a JSON string
webhook_create_or_update_parameters_instance = WebhookCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WebhookCreateOrUpdateParameters.to_json())

# convert the object into a dict
webhook_create_or_update_parameters_dict = webhook_create_or_update_parameters_instance.to_dict()
# create an instance of WebhookCreateOrUpdateParameters from a dict
webhook_create_or_update_parameters_from_dict = WebhookCreateOrUpdateParameters.from_dict(webhook_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


