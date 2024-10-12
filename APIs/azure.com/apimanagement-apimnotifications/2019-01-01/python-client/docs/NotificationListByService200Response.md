# NotificationListByService200Response

Paged Notification list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[NotificationListByService200ResponseValueInner]**](NotificationListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.notification_list_by_service200_response import NotificationListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationListByService200Response from a JSON string
notification_list_by_service200_response_instance = NotificationListByService200Response.from_json(json)
# print the JSON string representation of the object
print(NotificationListByService200Response.to_json())

# convert the object into a dict
notification_list_by_service200_response_dict = notification_list_by_service200_response_instance.to_dict()
# create an instance of NotificationListByService200Response from a dict
notification_list_by_service200_response_from_dict = NotificationListByService200Response.from_dict(notification_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


