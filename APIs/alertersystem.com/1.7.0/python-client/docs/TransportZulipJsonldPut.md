# TransportZulipJsonldPut

The TransportZulip resource is a collection of transports that carry dispatched alerts to the external Zulip service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**zulip_channel** | **str** | The channel for the Zulip service. | 
**zulip_email** | **str** | The email for the Zulip service. | 
**zulip_host** | **str** | The host for the Zulip service. | 
**zulip_token** | **str** | The token for the Zulip service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_zulip_jsonld_put import TransportZulipJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportZulipJsonldPut from a JSON string
transport_zulip_jsonld_put_instance = TransportZulipJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportZulipJsonldPut.to_json())

# convert the object into a dict
transport_zulip_jsonld_put_dict = transport_zulip_jsonld_put_instance.to_dict()
# create an instance of TransportZulipJsonldPut from a dict
transport_zulip_jsonld_put_from_dict = TransportZulipJsonldPut.from_dict(transport_zulip_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


