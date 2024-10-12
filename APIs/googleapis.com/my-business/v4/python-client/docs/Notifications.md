# Notifications

A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The notifications resource name. | [optional] 
**notification_types** | **List[str]** | The types of notifications that will be sent to the Cloud Pub/Sub topic. At least one must be specified. To stop receiving notifications entirely, use DeleteNotifications. | [optional] 
**topic_name** | **str** | The Google Cloud Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Cloud Pub/Sub topic. | [optional] 

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


