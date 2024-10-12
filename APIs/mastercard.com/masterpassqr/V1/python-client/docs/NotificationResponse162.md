# NotificationResponse162

Contains the details of the response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | status of the notification | [optional] 
**transfer_reference** | **str** | reference for the simulate notification | [optional] 

## Example

```python
from openapi_client.models.notification_response162 import NotificationResponse162

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationResponse162 from a JSON string
notification_response162_instance = NotificationResponse162.from_json(json)
# print the JSON string representation of the object
print(NotificationResponse162.to_json())

# convert the object into a dict
notification_response162_dict = notification_response162_instance.to_dict()
# create an instance of NotificationResponse162 from a dict
notification_response162_from_dict = NotificationResponse162.from_dict(notification_response162_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


