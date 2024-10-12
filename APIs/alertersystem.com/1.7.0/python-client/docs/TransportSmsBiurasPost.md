# TransportSmsBiurasPost

The TransportSmsBiuras resource is a collection of transports that carry dispatched alerts to the external SMSBIURAS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**sms_biuras_api_key** | **str** | The API key for the SMSBIURAS service. Stored in encrypted format. | 
**sms_biuras_from** | **str** | The sender for the SMSBIURAS service. | 
**sms_biuras_uid** | **str** | The client code for the SMSBIURAS service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sms_biuras_post import TransportSmsBiurasPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmsBiurasPost from a JSON string
transport_sms_biuras_post_instance = TransportSmsBiurasPost.from_json(json)
# print the JSON string representation of the object
print(TransportSmsBiurasPost.to_json())

# convert the object into a dict
transport_sms_biuras_post_dict = transport_sms_biuras_post_instance.to_dict()
# create an instance of TransportSmsBiurasPost from a dict
transport_sms_biuras_post_from_dict = TransportSmsBiurasPost.from_dict(transport_sms_biuras_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


