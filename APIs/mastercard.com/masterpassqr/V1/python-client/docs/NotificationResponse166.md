# NotificationResponse166

Contains the details of the response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | status of the notification | [optional] 
**transfer_reference** | **str** | reference for the simulate notification | [optional] 

## Example

```python
from openapi_client.models.notification_response166 import NotificationResponse166

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationResponse166 from a JSON string
notification_response166_instance = NotificationResponse166.from_json(json)
# print the JSON string representation of the object
print(NotificationResponse166.to_json())

# convert the object into a dict
notification_response166_dict = notification_response166_instance.to_dict()
# create an instance of NotificationResponse166 from a dict
notification_response166_from_dict = NotificationResponse166.from_dict(notification_response166_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


