# NotificationSetting

A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The resource name this setting is for. This is of the form &#x60;accounts/{account_id}/notificationSetting&#x60;. | [optional] 
**notification_types** | **List[str]** | The types of notifications that will be sent to the Pub/Sub topic. To stop receiving notifications entirely, use NotificationSettings.UpdateNotificationSetting with an empty notification_types or set the pubsub_topic to an empty string. | [optional] 
**pubsub_topic** | **str** | Optional. The Google Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Pub/Sub topic. | [optional] 

## Example

```python
from openapi_client.models.notification_setting import NotificationSetting

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSetting from a JSON string
notification_setting_instance = NotificationSetting.from_json(json)
# print the JSON string representation of the object
print(NotificationSetting.to_json())

# convert the object into a dict
notification_setting_dict = notification_setting_instance.to_dict()
# create an instance of NotificationSetting from a dict
notification_setting_from_dict = NotificationSetting.from_dict(notification_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


