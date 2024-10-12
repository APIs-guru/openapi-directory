# TransportTwilioJsonldGet

The TransportTwilio resource is a collection of transports that carry dispatched alerts to the external Twilio service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**twilio_from** | **str** | The sender for the Twilio service. | 
**twilio_sid** | **str** | The SID for the Twilio service. | 
**twilio_token** | **str** | The token for the Twilio service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_twilio_jsonld_get import TransportTwilioJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTwilioJsonldGet from a JSON string
transport_twilio_jsonld_get_instance = TransportTwilioJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportTwilioJsonldGet.to_json())

# convert the object into a dict
transport_twilio_jsonld_get_dict = transport_twilio_jsonld_get_instance.to_dict()
# create an instance of TransportTwilioJsonldGet from a dict
transport_twilio_jsonld_get_from_dict = TransportTwilioJsonldGet.from_dict(transport_twilio_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


