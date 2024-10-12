# TransportSms77Get

The TransportSms77 resource is a collection of transports that carry dispatched alerts to the external sms77 service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**sms77_api_key** | **str** | The API key for the Sms77 service. Stored in encrypted format. | 
**sms77_from** | **str** | The optional sender for the Sms77 service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sms77_get import TransportSms77Get

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSms77Get from a JSON string
transport_sms77_get_instance = TransportSms77Get.from_json(json)
# print the JSON string representation of the object
print(TransportSms77Get.to_json())

# convert the object into a dict
transport_sms77_get_dict = transport_sms77_get_instance.to_dict()
# create an instance of TransportSms77Get from a dict
transport_sms77_get_from_dict = TransportSms77Get.from_dict(transport_sms77_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


