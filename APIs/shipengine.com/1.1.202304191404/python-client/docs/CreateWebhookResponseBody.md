# CreateWebhookResponseBody

A webhook response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**WebhookEvent**](WebhookEvent.md) |  | 
**url** | **str** | The url that the webhook sends the request to | 
**webhook_id** | **str** | A string that uniquely identifies the webhook | [readonly] 

## Example

```python
from openapi_client.models.create_webhook_response_body import CreateWebhookResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWebhookResponseBody from a JSON string
create_webhook_response_body_instance = CreateWebhookResponseBody.from_json(json)
# print the JSON string representation of the object
print(CreateWebhookResponseBody.to_json())

# convert the object into a dict
create_webhook_response_body_dict = create_webhook_response_body_instance.to_dict()
# create an instance of CreateWebhookResponseBody from a dict
create_webhook_response_body_from_dict = CreateWebhookResponseBody.from_dict(create_webhook_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


