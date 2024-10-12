# TransportTwilioJsonldPut

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
from openapi_client.models.transport_twilio_jsonld_put import TransportTwilioJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTwilioJsonldPut from a JSON string
transport_twilio_jsonld_put_instance = TransportTwilioJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportTwilioJsonldPut.to_json())

# convert the object into a dict
transport_twilio_jsonld_put_dict = transport_twilio_jsonld_put_instance.to_dict()
# create an instance of TransportTwilioJsonldPut from a dict
transport_twilio_jsonld_put_from_dict = TransportTwilioJsonldPut.from_dict(transport_twilio_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


