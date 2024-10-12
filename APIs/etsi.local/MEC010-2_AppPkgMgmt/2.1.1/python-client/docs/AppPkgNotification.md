# AppPkgNotification

'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**AppPkgNotificationLinks**](AppPkgNotificationLinks.md) |  | 
**app_did** | **str** | Identifier of this MEC application descriptor. This attribute shall be globally unique. | 
**app_pkg_id** | **str** | Identifier of the onboarded application package. | 
**id** | **str** | &#39;&#39; | 
**notification_type** | [**AppPkgNotificationType**](AppPkgNotificationType.md) |  | 
**operational_state** | **str** |  | 
**subscription_id** | **str** | Identifier of the subscription related to this notification. | 
**time_stamp** | [**TimeStamp**](TimeStamp.md) |  | 

## Example

```python
from openapi_client.models.app_pkg_notification import AppPkgNotification

# TODO update the JSON string below
json = "{}"
# create an instance of AppPkgNotification from a JSON string
app_pkg_notification_instance = AppPkgNotification.from_json(json)
# print the JSON string representation of the object
print(AppPkgNotification.to_json())

# convert the object into a dict
app_pkg_notification_dict = app_pkg_notification_instance.to_dict()
# create an instance of AppPkgNotification from a dict
app_pkg_notification_from_dict = AppPkgNotification.from_dict(app_pkg_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


