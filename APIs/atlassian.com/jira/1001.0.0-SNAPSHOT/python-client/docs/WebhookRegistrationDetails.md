# WebhookRegistrationDetails

Details of webhooks to register.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app. Only a single URL per app is allowed to be registered. | 
**webhooks** | [**List[WebhookDetails]**](WebhookDetails.md) | A list of webhooks. | 

## Example

```python
from openapi_client.models.webhook_registration_details import WebhookRegistrationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookRegistrationDetails from a JSON string
webhook_registration_details_instance = WebhookRegistrationDetails.from_json(json)
# print the JSON string representation of the object
print(WebhookRegistrationDetails.to_json())

# convert the object into a dict
webhook_registration_details_dict = webhook_registration_details_instance.to_dict()
# create an instance of WebhookRegistrationDetails from a dict
webhook_registration_details_from_dict = WebhookRegistrationDetails.from_dict(webhook_registration_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


