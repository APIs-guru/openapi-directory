# TransportFreeMobileJsonldPut

The TransportFreeMobile resource is a collection of transports that carry dispatched alerts to the external Free Mobile service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**free_mobile_api_key** | **str** | The API key for the Free Mobile service. Stored in encrypted format. | 
**free_mobile_login** | **str** | The login for the Free Mobile service. | 
**free_mobile_phone** | **str** | The phone number for the Free Mobile service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_free_mobile_jsonld_put import TransportFreeMobileJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportFreeMobileJsonldPut from a JSON string
transport_free_mobile_jsonld_put_instance = TransportFreeMobileJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportFreeMobileJsonldPut.to_json())

# convert the object into a dict
transport_free_mobile_jsonld_put_dict = transport_free_mobile_jsonld_put_instance.to_dict()
# create an instance of TransportFreeMobileJsonldPut from a dict
transport_free_mobile_jsonld_put_from_dict = TransportFreeMobileJsonldPut.from_dict(transport_free_mobile_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


