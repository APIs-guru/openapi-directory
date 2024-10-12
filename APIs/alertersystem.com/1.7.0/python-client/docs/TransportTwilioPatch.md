# TransportTwilioPatch

The TransportTwilio resource is a collection of transports that carry dispatched alerts to the external Twilio service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**twilio_from** | **str** | The sender for the Twilio service. | 
**twilio_sid** | **str** | The SID for the Twilio service. | 
**twilio_token** | **str** | The token for the Twilio service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_twilio_patch import TransportTwilioPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTwilioPatch from a JSON string
transport_twilio_patch_instance = TransportTwilioPatch.from_json(json)
# print the JSON string representation of the object
print(TransportTwilioPatch.to_json())

# convert the object into a dict
transport_twilio_patch_dict = transport_twilio_patch_instance.to_dict()
# create an instance of TransportTwilioPatch from a dict
transport_twilio_patch_from_dict = TransportTwilioPatch.from_dict(transport_twilio_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


