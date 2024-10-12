# NotificationParameter

Contains notification related data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Optional. Array of string values. e.g. instance&#39;s replica information. | [optional] 

## Example

```python
from openapi_client.models.notification_parameter import NotificationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationParameter from a JSON string
notification_parameter_instance = NotificationParameter.from_json(json)
# print the JSON string representation of the object
print(NotificationParameter.to_json())

# convert the object into a dict
notification_parameter_dict = notification_parameter_instance.to_dict()
# create an instance of NotificationParameter from a dict
notification_parameter_from_dict = NotificationParameter.from_dict(notification_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


