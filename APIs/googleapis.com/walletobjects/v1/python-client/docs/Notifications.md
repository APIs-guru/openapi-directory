# Notifications

Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_notification** | [**ExpiryNotification**](ExpiryNotification.md) |  | [optional] 
**upcoming_notification** | [**UpcomingNotification**](UpcomingNotification.md) |  | [optional] 

## Example

```python
from openapi_client.models.notifications import Notifications

# TODO update the JSON string below
json = "{}"
# create an instance of Notifications from a JSON string
notifications_instance = Notifications.from_json(json)
# print the JSON string representation of the object
print(Notifications.to_json())

# convert the object into a dict
notifications_dict = notifications_instance.to_dict()
# create an instance of Notifications from a dict
notifications_from_dict = Notifications.from_dict(notifications_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


