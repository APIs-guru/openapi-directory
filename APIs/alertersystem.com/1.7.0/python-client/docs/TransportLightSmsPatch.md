# TransportLightSmsPatch

The TransportLightSms resource is a collection of transports that carry dispatched alerts to the external LightSMS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**light_sms_login** | **str** | The login for the LightSMS service. | 
**light_sms_phone** | **str** | The sender phone number for the LightSMS service. | 
**light_sms_token** | **str** | The token for the LightSMS service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_light_sms_patch import TransportLightSmsPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportLightSmsPatch from a JSON string
transport_light_sms_patch_instance = TransportLightSmsPatch.from_json(json)
# print the JSON string representation of the object
print(TransportLightSmsPatch.to_json())

# convert the object into a dict
transport_light_sms_patch_dict = transport_light_sms_patch_instance.to_dict()
# create an instance of TransportLightSmsPatch from a dict
transport_light_sms_patch_from_dict = TransportLightSmsPatch.from_dict(transport_light_sms_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


