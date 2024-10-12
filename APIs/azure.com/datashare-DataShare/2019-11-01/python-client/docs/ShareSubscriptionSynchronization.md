# ShareSubscriptionSynchronization

A ShareSubscriptionSynchronization data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_ms** | **int** | Synchronization duration | [optional] [readonly] 
**end_time** | **datetime** | End time of synchronization | [optional] [readonly] 
**message** | **str** | message of Synchronization | [optional] [readonly] 
**start_time** | **datetime** | start time of synchronization | [optional] [readonly] 
**status** | **str** | Raw Status | [optional] [readonly] 
**synchronization_id** | **str** | Synchronization id | 
**synchronization_mode** | **str** | Synchronization Mode | [optional] [readonly] 

## Example

```python
from openapi_client.models.share_subscription_synchronization import ShareSubscriptionSynchronization

# TODO update the JSON string below
json = "{}"
# create an instance of ShareSubscriptionSynchronization from a JSON string
share_subscription_synchronization_instance = ShareSubscriptionSynchronization.from_json(json)
# print the JSON string representation of the object
print(ShareSubscriptionSynchronization.to_json())

# convert the object into a dict
share_subscription_synchronization_dict = share_subscription_synchronization_instance.to_dict()
# create an instance of ShareSubscriptionSynchronization from a dict
share_subscription_synchronization_from_dict = ShareSubscriptionSynchronization.from_dict(share_subscription_synchronization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


