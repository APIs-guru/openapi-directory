# Notification

The notification associated with a budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_emails** | **List[str]** | Email addresses to send the budget notification to when the threshold is exceeded. | 
**contact_groups** | **List[str]** | Action groups to send the budget notification to when the threshold is exceeded. | [optional] 
**contact_roles** | **List[str]** | Contact roles to send the budget notification to when the threshold is exceeded. | [optional] 
**enabled** | **bool** | The notification is enabled or not. | 
**operator** | **str** | The comparison operator. | 
**threshold** | **float** | Threshold value associated with a notification. Notification is sent when the cost exceeded the threshold. It is always percent and has to be between 0 and 1000. | 

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


