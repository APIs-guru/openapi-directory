# NotificationResultObject

The following fields represent the data you need in order to retrieve the results of the requested function. See the details of the notification API for more. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_id** | **str** | If you&#39;re calling a processing function of some kind, a check number will be issued. This field will only be present if the function you&#39;re calling would normally return a checkId (such as scan, verify, and compare).  | [optional] 
**document_id** | **str** | Only supplied if the original request was tied to a document. This will be the same ID that was sent in the original acceptance.  | [optional] 
**entity_customer_reference** | **str** | If the entity in entityId above has had an external service ID attached to it in the entity extraData with kvpKey &#x3D; customer_reference, then this is that kvpValue  | [optional] 
**entity_id** | **str** | Only supplied if the original request was tied to an entity. This will be the same ID that was sent in the original acceptance.  | [optional] 
**function** | **str** | Short description of the original function called, or function that was triggered.  | [optional] 
**function_result** | [**EnumFunctionStatus**](EnumFunctionStatus.md) |  | [optional] 
**link_reference** | **str** | URI for resource containing more details about the reason for the notification.  | [optional] 
**message** | **str** | A brief, human readable message describing the reason for the notification.  | [optional] 
**notification_type** | [**EnumNotificationType**](EnumNotificationType.md) |  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 
**username** | **str** | The portal username that initiated the operation that led to this notification. If applicable and available.  | [optional] 

## Example

```python
from openapi_client.models.notification_result_object import NotificationResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationResultObject from a JSON string
notification_result_object_instance = NotificationResultObject.from_json(json)
# print the JSON string representation of the object
print(NotificationResultObject.to_json())

# convert the object into a dict
notification_result_object_dict = notification_result_object_instance.to_dict()
# create an instance of NotificationResultObject from a dict
notification_result_object_from_dict = NotificationResultObject.from_dict(notification_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


