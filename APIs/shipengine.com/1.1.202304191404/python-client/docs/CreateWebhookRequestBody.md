# CreateWebhookRequestBody

A create webhook request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**WebhookEvent**](WebhookEvent.md) |  | 
**url** | **str** | The url that the webhook sends the request to | 

## Example

```python
from openapi_client.models.create_webhook_request_body import CreateWebhookRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWebhookRequestBody from a JSON string
create_webhook_request_body_instance = CreateWebhookRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreateWebhookRequestBody.to_json())

# convert the object into a dict
create_webhook_request_body_dict = create_webhook_request_body_instance.to_dict()
# create an instance of CreateWebhookRequestBody from a dict
create_webhook_request_body_from_dict = CreateWebhookRequestBody.from_dict(create_webhook_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


