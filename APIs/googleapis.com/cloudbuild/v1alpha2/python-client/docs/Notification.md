# Notification

Notification is the container which holds the data that is relevant to this particular notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | The filter string to use for notification filtering. Currently, this is assumed to be a CEL program. See https://opensource.google/projects/cel for more. | [optional] 
**http_delivery** | [**HTTPDelivery**](HTTPDelivery.md) |  | [optional] 
**slack_delivery** | [**SlackDelivery**](SlackDelivery.md) |  | [optional] 
**smtp_delivery** | [**SMTPDelivery**](SMTPDelivery.md) |  | [optional] 
**struct_delivery** | **Dict[str, object]** | Escape hatch for users to supply custom delivery configs. | [optional] 

## Example

```python
from openapi_client.models.notification import Notification

# TODO update the JSON string below
json = "{}"
# create an instance of Notification from a JSON string
notification_instance = Notification.from_json(json)
# print the JSON string representation of the object
print(Notification.to_json())

# convert the object into a dict
notification_dict = notification_instance.to_dict()
# create an instance of Notification from a dict
notification_from_dict = Notification.from_dict(notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


