# TransportTelnyxJsonldGet

The TransportTelnyx resource is a collection of transports that carry dispatched alerts to the external Telnyx service.

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
**telnyx_api_key** | **str** | The API key for the Telnyx service. Stored in encrypted format. | 
**telnyx_from** | **str** | The from value for the Telnyx service. | 
**telnyx_messaging_profile_id** | **str** | The messaging profile ID (You need this in order to show a name to the recipient instead of just the phone number) for the Telnyx service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_telnyx_jsonld_get import TransportTelnyxJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTelnyxJsonldGet from a JSON string
transport_telnyx_jsonld_get_instance = TransportTelnyxJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportTelnyxJsonldGet.to_json())

# convert the object into a dict
transport_telnyx_jsonld_get_dict = transport_telnyx_jsonld_get_instance.to_dict()
# create an instance of TransportTelnyxJsonldGet from a dict
transport_telnyx_jsonld_get_from_dict = TransportTelnyxJsonldGet.from_dict(transport_telnyx_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


