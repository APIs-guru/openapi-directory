# TransportSmsmodeJsonldPut

The TransportSmsmode resource is a collection of transports that carry dispatched alerts to the external Smsmode service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**smsmode_api_key** | **str** | The API key for the Smsmode service. Stored in encrypted format. | 
**smsmode_from** | **str** | The from value for the Smsmode service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_smsmode_jsonld_put import TransportSmsmodeJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmsmodeJsonldPut from a JSON string
transport_smsmode_jsonld_put_instance = TransportSmsmodeJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportSmsmodeJsonldPut.to_json())

# convert the object into a dict
transport_smsmode_jsonld_put_dict = transport_smsmode_jsonld_put_instance.to_dict()
# create an instance of TransportSmsmodeJsonldPut from a dict
transport_smsmode_jsonld_put_from_dict = TransportSmsmodeJsonldPut.from_dict(transport_smsmode_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


