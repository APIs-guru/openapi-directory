# WebHookEventSubscriptionDestination

Information about the webhook destination for an event subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebHookEventSubscriptionDestinationProperties**](WebHookEventSubscriptionDestinationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.web_hook_event_subscription_destination import WebHookEventSubscriptionDestination

# TODO update the JSON string below
json = "{}"
# create an instance of WebHookEventSubscriptionDestination from a JSON string
web_hook_event_subscription_destination_instance = WebHookEventSubscriptionDestination.from_json(json)
# print the JSON string representation of the object
print(WebHookEventSubscriptionDestination.to_json())

# convert the object into a dict
web_hook_event_subscription_destination_dict = web_hook_event_subscription_destination_instance.to_dict()
# create an instance of WebHookEventSubscriptionDestination from a dict
web_hook_event_subscription_destination_from_dict = WebHookEventSubscriptionDestination.from_dict(web_hook_event_subscription_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


