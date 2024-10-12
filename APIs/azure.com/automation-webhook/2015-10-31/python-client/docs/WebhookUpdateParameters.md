# WebhookUpdateParameters

The parameters supplied to the update webhook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the webhook. | [optional] 
**properties** | [**WebhookUpdateProperties**](WebhookUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_update_parameters import WebhookUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookUpdateParameters from a JSON string
webhook_update_parameters_instance = WebhookUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WebhookUpdateParameters.to_json())

# convert the object into a dict
webhook_update_parameters_dict = webhook_update_parameters_instance.to_dict()
# create an instance of WebhookUpdateParameters from a dict
webhook_update_parameters_from_dict = WebhookUpdateParameters.from_dict(webhook_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


