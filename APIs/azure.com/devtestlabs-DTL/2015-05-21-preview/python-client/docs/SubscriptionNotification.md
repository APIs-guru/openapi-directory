# SubscriptionNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionNotificationProperties**](SubscriptionNotificationProperties.md) |  | [optional] 
**registration_date** | **str** |  | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.subscription_notification import SubscriptionNotification

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionNotification from a JSON string
subscription_notification_instance = SubscriptionNotification.from_json(json)
# print the JSON string representation of the object
print(SubscriptionNotification.to_json())

# convert the object into a dict
subscription_notification_dict = subscription_notification_instance.to_dict()
# create an instance of SubscriptionNotification from a dict
subscription_notification_from_dict = SubscriptionNotification.from_dict(subscription_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


