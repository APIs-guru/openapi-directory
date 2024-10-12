# CloudPubSubNotificationConfig

The configuration for Pub/Sub messaging for the connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_subscription** | **str** | The Pub/Sub subscription the connector uses to receive notifications. | [optional] 

## Example

```python
from openapi_client.models.cloud_pub_sub_notification_config import CloudPubSubNotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudPubSubNotificationConfig from a JSON string
cloud_pub_sub_notification_config_instance = CloudPubSubNotificationConfig.from_json(json)
# print the JSON string representation of the object
print(CloudPubSubNotificationConfig.to_json())

# convert the object into a dict
cloud_pub_sub_notification_config_dict = cloud_pub_sub_notification_config_instance.to_dict()
# create an instance of CloudPubSubNotificationConfig from a dict
cloud_pub_sub_notification_config_from_dict = CloudPubSubNotificationConfig.from_dict(cloud_pub_sub_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


