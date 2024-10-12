# TransportEsendexPut

The TransportEsendex resource is a collection of transports that carry dispatched alerts to the external Esendex service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**esendex_account_reference** | **str** | The account reference that the message should be sent from for the Esendex service. | 
**esendex_from** | **str** | The alphanumeric originator for the message to appear to originate from for the Esendex service. | 
**esendex_password** | **str** | The API password for the Esendex service. Stored in encrypted format. | 
**esendex_username** | **str** | The account email for the Esendex service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_esendex_put import TransportEsendexPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportEsendexPut from a JSON string
transport_esendex_put_instance = TransportEsendexPut.from_json(json)
# print the JSON string representation of the object
print(TransportEsendexPut.to_json())

# convert the object into a dict
transport_esendex_put_dict = transport_esendex_put_instance.to_dict()
# create an instance of TransportEsendexPut from a dict
transport_esendex_put_from_dict = TransportEsendexPut.from_dict(transport_esendex_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


