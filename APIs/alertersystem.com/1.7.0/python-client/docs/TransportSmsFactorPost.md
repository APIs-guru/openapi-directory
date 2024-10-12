# TransportSmsFactorPost

The TransportSmsFactor resource is a collection of transports that carry dispatched alerts to the external SMSFactor service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**sms_factor_push_type** | **str** | The push type for the SMSFactor service. | 
**sms_factor_sender** | **str** | The sender value for the SMSFactor service. | 
**sms_factor_token** | **str** | The token for the SMSFactor service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sms_factor_post import TransportSmsFactorPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmsFactorPost from a JSON string
transport_sms_factor_post_instance = TransportSmsFactorPost.from_json(json)
# print the JSON string representation of the object
print(TransportSmsFactorPost.to_json())

# convert the object into a dict
transport_sms_factor_post_dict = transport_sms_factor_post_instance.to_dict()
# create an instance of TransportSmsFactorPost from a dict
transport_sms_factor_post_from_dict = TransportSmsFactorPost.from_dict(transport_sms_factor_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


