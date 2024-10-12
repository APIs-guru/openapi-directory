# UpdateWebhookRequestBody

An update webhook request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The url that the wehbook sends the request | [optional] 

## Example

```python
from openapi_client.models.update_webhook_request_body import UpdateWebhookRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWebhookRequestBody from a JSON string
update_webhook_request_body_instance = UpdateWebhookRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateWebhookRequestBody.to_json())

# convert the object into a dict
update_webhook_request_body_dict = update_webhook_request_body_instance.to_dict()
# create an instance of UpdateWebhookRequestBody from a dict
update_webhook_request_body_from_dict = UpdateWebhookRequestBody.from_dict(update_webhook_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


