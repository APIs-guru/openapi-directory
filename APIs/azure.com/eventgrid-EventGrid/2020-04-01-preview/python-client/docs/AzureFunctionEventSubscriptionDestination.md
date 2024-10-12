# AzureFunctionEventSubscriptionDestination

Information about the azure function destination for an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AzureFunctionEventSubscriptionDestinationProperties**](AzureFunctionEventSubscriptionDestinationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_function_event_subscription_destination import AzureFunctionEventSubscriptionDestination

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFunctionEventSubscriptionDestination from a JSON string
azure_function_event_subscription_destination_instance = AzureFunctionEventSubscriptionDestination.from_json(json)
# print the JSON string representation of the object
print(AzureFunctionEventSubscriptionDestination.to_json())

# convert the object into a dict
azure_function_event_subscription_destination_dict = azure_function_event_subscription_destination_instance.to_dict()
# create an instance of AzureFunctionEventSubscriptionDestination from a dict
azure_function_event_subscription_destination_from_dict = AzureFunctionEventSubscriptionDestination.from_dict(azure_function_event_subscription_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


