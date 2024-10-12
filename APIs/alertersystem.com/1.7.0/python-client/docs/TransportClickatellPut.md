# TransportClickatellPut

The TransportClickatell resource is a collection of transports that carry dispatched alerts to the external Clickatell service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clickatell_access_token** | **str** | The access token for the Clickatell service. Stored in encrypted format. | 
**clickatell_from** | **str** | The from value for the Clickatell service. | 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_clickatell_put import TransportClickatellPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportClickatellPut from a JSON string
transport_clickatell_put_instance = TransportClickatellPut.from_json(json)
# print the JSON string representation of the object
print(TransportClickatellPut.to_json())

# convert the object into a dict
transport_clickatell_put_dict = transport_clickatell_put_instance.to_dict()
# create an instance of TransportClickatellPut from a dict
transport_clickatell_put_from_dict = TransportClickatellPut.from_dict(transport_clickatell_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


