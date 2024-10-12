# NotificationConfig

Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the notification config (max of 1024 characters). | [optional] 
**name** | **str** | The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: \&quot;organizations/{organization_id}/notificationConfigs/notify_public_bucket\&quot;, \&quot;folders/{folder_id}/notificationConfigs/notify_public_bucket\&quot;, or \&quot;projects/{project_id}/notificationConfigs/notify_public_bucket\&quot;. | [optional] 
**pubsub_topic** | **str** | The Pub/Sub topic to send notifications to. Its format is \&quot;projects/[project_id]/topics/[topic]\&quot;. | [optional] 
**service_account** | **str** | Output only. The service account that needs \&quot;pubsub.topics.publish\&quot; permission to publish to the Pub/Sub topic. | [optional] [readonly] 
**streaming_config** | [**StreamingConfig**](StreamingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_config import NotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationConfig from a JSON string
notification_config_instance = NotificationConfig.from_json(json)
# print the JSON string representation of the object
print(NotificationConfig.to_json())

# convert the object into a dict
notification_config_dict = notification_config_instance.to_dict()
# create an instance of NotificationConfig from a dict
notification_config_from_dict = NotificationConfig.from_dict(notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


