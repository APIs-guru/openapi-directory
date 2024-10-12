# WebHookEventSubscriptionDestinationProperties

Information about the webhook destination properties for an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_active_directory_application_id_or_uri** | **str** | The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests. | [optional] 
**azure_active_directory_tenant_id** | **str** | The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests. | [optional] 
**endpoint_base_url** | **str** | The base URL that represents the endpoint of the destination of an event subscription. | [optional] [readonly] 
**endpoint_url** | **str** | The URL that represents the endpoint of the destination of an event subscription. | [optional] 
**max_events_per_batch** | **int** | Maximum number of events per batch. | [optional] 
**preferred_batch_size_in_kilobytes** | **int** | Preferred batch size in Kilobytes. | [optional] 

## Example

```python
from openapi_client.models.web_hook_event_subscription_destination_properties import WebHookEventSubscriptionDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebHookEventSubscriptionDestinationProperties from a JSON string
web_hook_event_subscription_destination_properties_instance = WebHookEventSubscriptionDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(WebHookEventSubscriptionDestinationProperties.to_json())

# convert the object into a dict
web_hook_event_subscription_destination_properties_dict = web_hook_event_subscription_destination_properties_instance.to_dict()
# create an instance of WebHookEventSubscriptionDestinationProperties from a dict
web_hook_event_subscription_destination_properties_from_dict = WebHookEventSubscriptionDestinationProperties.from_dict(web_hook_event_subscription_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


