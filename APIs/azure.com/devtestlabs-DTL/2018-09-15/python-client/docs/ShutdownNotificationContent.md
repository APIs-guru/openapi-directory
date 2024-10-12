# ShutdownNotificationContent

The contents of a shutdown notification. Webhooks can use this type to deserialize the request body when they get notified of an imminent shutdown.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delay_url120** | **str** | The URL to delay shutdown by 2 hours. | [optional] 
**delay_url60** | **str** | The URL to delay shutdown by 60 minutes. | [optional] 
**event_type** | **str** | The event for which a notification will be sent. | [optional] 
**guid** | **str** | The GUID for the virtual machine to be shut down. | [optional] 
**lab_name** | **str** | The lab for the schedule. | [optional] 
**minutes_until_shutdown** | **str** | Minutes remaining until shutdown | [optional] 
**owner** | **str** | The owner of the virtual machine. | [optional] 
**resource_group_name** | **str** | The resource group name for the schedule. | [optional] 
**skip_url** | **str** | The URL to skip auto-shutdown. | [optional] 
**subscription_id** | **str** | The subscription ID for the schedule. | [optional] 
**text** | **str** | The text for the notification. | [optional] 
**vm_name** | **str** | The virtual machine to be shut down. | [optional] 
**vm_url** | **str** | The URL of the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.shutdown_notification_content import ShutdownNotificationContent

# TODO update the JSON string below
json = "{}"
# create an instance of ShutdownNotificationContent from a JSON string
shutdown_notification_content_instance = ShutdownNotificationContent.from_json(json)
# print the JSON string representation of the object
print(ShutdownNotificationContent.to_json())

# convert the object into a dict
shutdown_notification_content_dict = shutdown_notification_content_instance.to_dict()
# create an instance of ShutdownNotificationContent from a dict
shutdown_notification_content_from_dict = ShutdownNotificationContent.from_dict(shutdown_notification_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


