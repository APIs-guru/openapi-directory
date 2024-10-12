# PushSubscription

Represents a subscription to the push streaming server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | **object** | Which alerts should be delivered to the &#x60;endpoint&#x60;. | 
**endpoint** | **str** | Where push alerts will be sent to. | 
**id** | **str** | The ID of the push subscription in the database. Cast from an integer, but not guaranteed to be a number. | 
**server_key** | **str** | The streaming server&#39;s VAPID key. | 

## Example

```python
from openapi_client.models.push_subscription import PushSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of PushSubscription from a JSON string
push_subscription_instance = PushSubscription.from_json(json)
# print the JSON string representation of the object
print(PushSubscription.to_json())

# convert the object into a dict
push_subscription_dict = push_subscription_instance.to_dict()
# create an instance of PushSubscription from a dict
push_subscription_from_dict = PushSubscription.from_dict(push_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


