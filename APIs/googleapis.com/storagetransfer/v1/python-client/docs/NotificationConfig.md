# NotificationConfig

Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `\"eventType\"`: one of the EventType values * `\"payloadFormat\"`: one of the PayloadFormat values * `\"projectId\"`: the project_id of the `TransferOperation` * `\"transferJobName\"`: the transfer_job_name of the `TransferOperation` * `\"transferOperationName\"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_types** | **List[str]** | Event types for which a notification is desired. If empty, send notifications for all event types. | [optional] 
**payload_format** | **str** | Required. The desired format of the notification message payloads. | [optional] 
**pubsub_topic** | **str** | Required. The &#x60;Topic.name&#x60; of the Pub/Sub topic to which to publish notifications. Must be of the format: &#x60;projects/{project}/topics/{topic}&#x60;. Not matching this format results in an INVALID_ARGUMENT error. | [optional] 

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


