# TransportVonagePut

The TransportVonage resource is a collection of transports that carry dispatched alerts to the external Vonage service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**vonage_from** | **str** | The sender for the Vonage service. | 
**vonage_key** | **str** | The key for the Vonage service. | 
**vonage_secret** | **str** | The secret for the Vonage service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_vonage_put import TransportVonagePut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportVonagePut from a JSON string
transport_vonage_put_instance = TransportVonagePut.from_json(json)
# print the JSON string representation of the object
print(TransportVonagePut.to_json())

# convert the object into a dict
transport_vonage_put_dict = transport_vonage_put_instance.to_dict()
# create an instance of TransportVonagePut from a dict
transport_vonage_put_from_dict = TransportVonagePut.from_dict(transport_vonage_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


