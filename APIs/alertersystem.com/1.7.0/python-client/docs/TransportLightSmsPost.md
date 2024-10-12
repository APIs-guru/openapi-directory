# TransportLightSmsPost

The TransportLightSms resource is a collection of transports that carry dispatched alerts to the external LightSMS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**light_sms_login** | **str** | The login for the LightSMS service. | 
**light_sms_phone** | **str** | The sender phone number for the LightSMS service. | 
**light_sms_token** | **str** | The token for the LightSMS service. Stored in encrypted format. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_light_sms_post import TransportLightSmsPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportLightSmsPost from a JSON string
transport_light_sms_post_instance = TransportLightSmsPost.from_json(json)
# print the JSON string representation of the object
print(TransportLightSmsPost.to_json())

# convert the object into a dict
transport_light_sms_post_dict = transport_light_sms_post_instance.to_dict()
# create an instance of TransportLightSmsPost from a dict
transport_light_sms_post_from_dict = TransportLightSmsPost.from_dict(transport_light_sms_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


