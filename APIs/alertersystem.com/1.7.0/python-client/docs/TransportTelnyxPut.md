# TransportTelnyxPut

The TransportTelnyx resource is a collection of transports that carry dispatched alerts to the external Telnyx service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**telnyx_api_key** | **str** | The API key for the Telnyx service. Stored in encrypted format. | 
**telnyx_from** | **str** | The from value for the Telnyx service. | 
**telnyx_messaging_profile_id** | **str** | The messaging profile ID (You need this in order to show a name to the recipient instead of just the phone number) for the Telnyx service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_telnyx_put import TransportTelnyxPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTelnyxPut from a JSON string
transport_telnyx_put_instance = TransportTelnyxPut.from_json(json)
# print the JSON string representation of the object
print(TransportTelnyxPut.to_json())

# convert the object into a dict
transport_telnyx_put_dict = transport_telnyx_put_instance.to_dict()
# create an instance of TransportTelnyxPut from a dict
transport_telnyx_put_from_dict = TransportTelnyxPut.from_dict(transport_telnyx_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


