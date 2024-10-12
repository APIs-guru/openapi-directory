# TransportInfobipPut

The TransportInfobip resource is a collection of transports that carry dispatched alerts to the external Infobip service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**infobip_auth_token** | **str** | The auth token for the Infobip service. Stored in encrypted format. | 
**infobip_from** | **str** | The sender value for the Infobip service. | 
**infobip_host** | **str** | The host for the Infobip service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_infobip_put import TransportInfobipPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportInfobipPut from a JSON string
transport_infobip_put_instance = TransportInfobipPut.from_json(json)
# print the JSON string representation of the object
print(TransportInfobipPut.to_json())

# convert the object into a dict
transport_infobip_put_dict = transport_infobip_put_instance.to_dict()
# create an instance of TransportInfobipPut from a dict
transport_infobip_put_from_dict = TransportInfobipPut.from_dict(transport_infobip_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


