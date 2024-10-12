# PubsubNotificationSettings

Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_topic_name** | **str** | Cloud pub/sub topic to which notifications are sent (read-only). | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#pubsubNotificationSettings&#x60;\&quot; | [optional] 
**registered_events** | **List[str]** | List of event types. Acceptable values are: - \&quot;&#x60;orderPendingShipment&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.pubsub_notification_settings import PubsubNotificationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubNotificationSettings from a JSON string
pubsub_notification_settings_instance = PubsubNotificationSettings.from_json(json)
# print the JSON string representation of the object
print(PubsubNotificationSettings.to_json())

# convert the object into a dict
pubsub_notification_settings_dict = pubsub_notification_settings_instance.to_dict()
# create an instance of PubsubNotificationSettings from a dict
pubsub_notification_settings_from_dict = PubsubNotificationSettings.from_dict(pubsub_notification_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


