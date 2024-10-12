# AzureFunctionEventSubscriptionDestinationProperties

The properties that represent the Azure Function destination of an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_events_per_batch** | **int** | Maximum number of events per batch. | [optional] 
**preferred_batch_size_in_kilobytes** | **int** | Preferred batch size in Kilobytes. | [optional] 
**resource_id** | **str** | The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.azure_function_event_subscription_destination_properties import AzureFunctionEventSubscriptionDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFunctionEventSubscriptionDestinationProperties from a JSON string
azure_function_event_subscription_destination_properties_instance = AzureFunctionEventSubscriptionDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(AzureFunctionEventSubscriptionDestinationProperties.to_json())

# convert the object into a dict
azure_function_event_subscription_destination_properties_dict = azure_function_event_subscription_destination_properties_instance.to_dict()
# create an instance of AzureFunctionEventSubscriptionDestinationProperties from a dict
azure_function_event_subscription_destination_properties_from_dict = AzureFunctionEventSubscriptionDestinationProperties.from_dict(azure_function_event_subscription_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


