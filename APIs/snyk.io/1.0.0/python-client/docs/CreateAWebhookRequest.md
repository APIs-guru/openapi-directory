# CreateAWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | This is a password you create, that Snyk uses to sign our transports to you, so you be sure the notification is authentic. Your &#x60;secret&#x60; should: Be a random string with high entropy; Not be used for anything else; Only known to Snyk and your webhook transport consuming code; | [optional] 
**url** | **str** | Webhooks can only be configured for URLs using the &#x60;https&#x60; protocol. &#x60;http&#x60; is not allowed. | [optional] 

## Example

```python
from openapi_client.models.create_a_webhook_request import CreateAWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAWebhookRequest from a JSON string
create_a_webhook_request_instance = CreateAWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAWebhookRequest.to_json())

# convert the object into a dict
create_a_webhook_request_dict = create_a_webhook_request_instance.to_dict()
# create an instance of CreateAWebhookRequest from a dict
create_a_webhook_request_from_dict = CreateAWebhookRequest.from_dict(create_a_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


