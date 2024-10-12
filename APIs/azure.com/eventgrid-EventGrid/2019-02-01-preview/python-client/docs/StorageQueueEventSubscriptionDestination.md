# StorageQueueEventSubscriptionDestination

Information about the storage queue destination for an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageQueueEventSubscriptionDestinationProperties**](StorageQueueEventSubscriptionDestinationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_queue_event_subscription_destination import StorageQueueEventSubscriptionDestination

# TODO update the JSON string below
json = "{}"
# create an instance of StorageQueueEventSubscriptionDestination from a JSON string
storage_queue_event_subscription_destination_instance = StorageQueueEventSubscriptionDestination.from_json(json)
# print the JSON string representation of the object
print(StorageQueueEventSubscriptionDestination.to_json())

# convert the object into a dict
storage_queue_event_subscription_destination_dict = storage_queue_event_subscription_destination_instance.to_dict()
# create an instance of StorageQueueEventSubscriptionDestination from a dict
storage_queue_event_subscription_destination_from_dict = StorageQueueEventSubscriptionDestination.from_dict(storage_queue_event_subscription_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


