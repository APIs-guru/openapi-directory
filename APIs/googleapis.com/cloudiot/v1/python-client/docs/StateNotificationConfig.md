# StateNotificationConfig

The configuration for notification of new states received from the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_topic_name** | **str** | A Cloud Pub/Sub topic name. For example, &#x60;projects/myProject/topics/deviceEvents&#x60;. | [optional] 

## Example

```python
from openapi_client.models.state_notification_config import StateNotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StateNotificationConfig from a JSON string
state_notification_config_instance = StateNotificationConfig.from_json(json)
# print the JSON string representation of the object
print(StateNotificationConfig.to_json())

# convert the object into a dict
state_notification_config_dict = state_notification_config_instance.to_dict()
# create an instance of StateNotificationConfig from a dict
state_notification_config_from_dict = StateNotificationConfig.from_dict(state_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


