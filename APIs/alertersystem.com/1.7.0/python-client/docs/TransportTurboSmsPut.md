# TransportTurboSmsPut

The TransportTurboSms resource is a collection of transports that carry dispatched alerts to the external TurboSms service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**turbo_sms_auth_token** | **str** | The auth token for the TurboSms service. Stored in encrypted format. | 
**turbo_sms_from** | **str** | The sender name (should be alphanumeric, max 20 characters and activated in your TurboSms account) for the TurboSms service. | 

## Example

```python
from openapi_client.models.transport_turbo_sms_put import TransportTurboSmsPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTurboSmsPut from a JSON string
transport_turbo_sms_put_instance = TransportTurboSmsPut.from_json(json)
# print the JSON string representation of the object
print(TransportTurboSmsPut.to_json())

# convert the object into a dict
transport_turbo_sms_put_dict = transport_turbo_sms_put_instance.to_dict()
# create an instance of TransportTurboSmsPut from a dict
transport_turbo_sms_put_from_dict = TransportTurboSmsPut.from_dict(transport_turbo_sms_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


