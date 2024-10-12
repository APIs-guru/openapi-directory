# StorageQueueEventSubscriptionDestinationProperties

The properties for a storage queue destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue_name** | **str** | The name of the Storage queue under a storage account that is the destination of an event subscription. | [optional] 
**resource_id** | **str** | The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.storage_queue_event_subscription_destination_properties import StorageQueueEventSubscriptionDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageQueueEventSubscriptionDestinationProperties from a JSON string
storage_queue_event_subscription_destination_properties_instance = StorageQueueEventSubscriptionDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(StorageQueueEventSubscriptionDestinationProperties.to_json())

# convert the object into a dict
storage_queue_event_subscription_destination_properties_dict = storage_queue_event_subscription_destination_properties_instance.to_dict()
# create an instance of StorageQueueEventSubscriptionDestinationProperties from a dict
storage_queue_event_subscription_destination_properties_from_dict = StorageQueueEventSubscriptionDestinationProperties.from_dict(storage_queue_event_subscription_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


