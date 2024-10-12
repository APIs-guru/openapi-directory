# TransportSms77JsonldPut

The TransportSms77 resource is a collection of transports that carry dispatched alerts to the external sms77 service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**sms77_api_key** | **str** | The API key for the Sms77 service. Stored in encrypted format. | 
**sms77_from** | **str** | The optional sender for the Sms77 service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sms77_jsonld_put import TransportSms77JsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSms77JsonldPut from a JSON string
transport_sms77_jsonld_put_instance = TransportSms77JsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportSms77JsonldPut.to_json())

# convert the object into a dict
transport_sms77_jsonld_put_dict = transport_sms77_jsonld_put_instance.to_dict()
# create an instance of TransportSms77JsonldPut from a dict
transport_sms77_jsonld_put_from_dict = TransportSms77JsonldPut.from_dict(transport_sms77_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


