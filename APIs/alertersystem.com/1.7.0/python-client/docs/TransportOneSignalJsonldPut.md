# TransportOneSignalJsonldPut

The TransportOneSignal resource is a collection of transports that carry dispatched alerts to the external One Signal service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**one_signal_api_key** | **str** | The API (auth) key for the One Signal service. Stored in encrypted format. | 
**one_signal_app_id** | **str** | The App ID for the One Signal service. | 
**one_signal_default_recipient_id** | **str** | The optional default recipient ID for the One Signal service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_one_signal_jsonld_put import TransportOneSignalJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportOneSignalJsonldPut from a JSON string
transport_one_signal_jsonld_put_instance = TransportOneSignalJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportOneSignalJsonldPut.to_json())

# convert the object into a dict
transport_one_signal_jsonld_put_dict = transport_one_signal_jsonld_put_instance.to_dict()
# create an instance of TransportOneSignalJsonldPut from a dict
transport_one_signal_jsonld_put_from_dict = TransportOneSignalJsonldPut.from_dict(transport_one_signal_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


