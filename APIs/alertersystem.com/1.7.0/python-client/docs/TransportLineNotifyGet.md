# TransportLineNotifyGet

The TransportLineNotify resource is a collection of transports that carry dispatched alerts to the external LINE Notify service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**line_notify_access_token** | **str** | The access token for the LINE Notify service. Stored in encrypted format. | 
**line_notify_sticker_id** | **str** | The sticker ID value for the LINE Notify service. | [optional] 
**line_notify_sticker_package_id** | **str** | The sticker package ID value for the LINE Notify service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_line_notify_get import TransportLineNotifyGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportLineNotifyGet from a JSON string
transport_line_notify_get_instance = TransportLineNotifyGet.from_json(json)
# print the JSON string representation of the object
print(TransportLineNotifyGet.to_json())

# convert the object into a dict
transport_line_notify_get_dict = transport_line_notify_get_instance.to_dict()
# create an instance of TransportLineNotifyGet from a dict
transport_line_notify_get_from_dict = TransportLineNotifyGet.from_dict(transport_line_notify_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


