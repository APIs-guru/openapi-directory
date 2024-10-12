# AddWebhookRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_url** | **str** | The endpoint is where the webhook request will be sent. | 
**resource** | **str** | Resource identifier for the top folder this webhook is associated with | [optional] 
**response_version** | **str** | What version of webhook request should be sent to the endpoint URL when messages are sent | [optional] 
**triggers** | [**WebhookTriggers**](WebhookTriggers.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_webhook_request_body import AddWebhookRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddWebhookRequestBody from a JSON string
add_webhook_request_body_instance = AddWebhookRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddWebhookRequestBody.to_json())

# convert the object into a dict
add_webhook_request_body_dict = add_webhook_request_body_instance.to_dict()
# create an instance of AddWebhookRequestBody from a dict
add_webhook_request_body_from_dict = AddWebhookRequestBody.from_dict(add_webhook_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


