# TransportLineNotifyJsonldPost

The TransportLineNotify resource is a collection of transports that carry dispatched alerts to the external LINE Notify service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**line_notify_access_token** | **str** | The access token for the LINE Notify service. Stored in encrypted format. | 
**line_notify_sticker_id** | **str** | The sticker ID value for the LINE Notify service. | [optional] 
**line_notify_sticker_package_id** | **str** | The sticker package ID value for the LINE Notify service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_line_notify_jsonld_post import TransportLineNotifyJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportLineNotifyJsonldPost from a JSON string
transport_line_notify_jsonld_post_instance = TransportLineNotifyJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportLineNotifyJsonldPost.to_json())

# convert the object into a dict
transport_line_notify_jsonld_post_dict = transport_line_notify_jsonld_post_instance.to_dict()
# create an instance of TransportLineNotifyJsonldPost from a dict
transport_line_notify_jsonld_post_from_dict = TransportLineNotifyJsonldPost.from_dict(transport_line_notify_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


