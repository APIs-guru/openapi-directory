# TransportSinchJsonldPut

The TransportSinch resource is a collection of transports that carry dispatched alerts to the external Sinch service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**sinch_auth_token** | **str** | The auth token for the Sinch service. Stored in encrypted format. | 
**sinch_from** | **str** | The sender for the Sinch service. | 
**sinch_service_plan_id** | **str** | The service plan ID for the Sinch service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sinch_jsonld_put import TransportSinchJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSinchJsonldPut from a JSON string
transport_sinch_jsonld_put_instance = TransportSinchJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportSinchJsonldPut.to_json())

# convert the object into a dict
transport_sinch_jsonld_put_dict = transport_sinch_jsonld_put_instance.to_dict()
# create an instance of TransportSinchJsonldPut from a dict
transport_sinch_jsonld_put_from_dict = TransportSinchJsonldPut.from_dict(transport_sinch_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


