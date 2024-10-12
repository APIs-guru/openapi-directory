# TransportZulipGet

The TransportZulip resource is a collection of transports that carry dispatched alerts to the external Zulip service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**zulip_channel** | **str** | The channel for the Zulip service. | 
**zulip_email** | **str** | The email for the Zulip service. | 
**zulip_host** | **str** | The host for the Zulip service. | 
**zulip_token** | **str** | The token for the Zulip service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_zulip_get import TransportZulipGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportZulipGet from a JSON string
transport_zulip_get_instance = TransportZulipGet.from_json(json)
# print the JSON string representation of the object
print(TransportZulipGet.to_json())

# convert the object into a dict
transport_zulip_get_dict = transport_zulip_get_instance.to_dict()
# create an instance of TransportZulipGet from a dict
transport_zulip_get_from_dict = TransportZulipGet.from_dict(transport_zulip_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


