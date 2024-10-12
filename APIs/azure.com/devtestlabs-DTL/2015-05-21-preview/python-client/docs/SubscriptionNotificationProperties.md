# SubscriptionNotificationProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.subscription_notification_properties import SubscriptionNotificationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionNotificationProperties from a JSON string
subscription_notification_properties_instance = SubscriptionNotificationProperties.from_json(json)
# print the JSON string representation of the object
print(SubscriptionNotificationProperties.to_json())

# convert the object into a dict
subscription_notification_properties_dict = subscription_notification_properties_instance.to_dict()
# create an instance of SubscriptionNotificationProperties from a dict
subscription_notification_properties_from_dict = SubscriptionNotificationProperties.from_dict(subscription_notification_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


