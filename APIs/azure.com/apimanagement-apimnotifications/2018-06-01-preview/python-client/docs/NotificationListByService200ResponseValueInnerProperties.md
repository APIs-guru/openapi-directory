# NotificationListByService200ResponseValueInnerProperties

Notification Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the Notification. | [optional] 
**recipients** | [**NotificationListByService200ResponseValueInnerPropertiesRecipients**](NotificationListByService200ResponseValueInnerPropertiesRecipients.md) |  | [optional] 
**title** | **str** | Title of the Notification. | 

## Example

```python
from openapi_client.models.notification_list_by_service200_response_value_inner_properties import NotificationListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationListByService200ResponseValueInnerProperties from a JSON string
notification_list_by_service200_response_value_inner_properties_instance = NotificationListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(NotificationListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
notification_list_by_service200_response_value_inner_properties_dict = notification_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of NotificationListByService200ResponseValueInnerProperties from a dict
notification_list_by_service200_response_value_inner_properties_from_dict = NotificationListByService200ResponseValueInnerProperties.from_dict(notification_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


