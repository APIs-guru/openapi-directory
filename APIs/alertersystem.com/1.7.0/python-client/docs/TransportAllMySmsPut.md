# TransportAllMySmsPut

The TransportAllMySms resource is a collection of transports that carry dispatched alerts to the external Allmysms service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_my_sms_api_key** | **str** | The API key for the Allmysms service. Stored in encrypted format. | 
**all_my_sms_from** | **str** | The sender value (default 36180) for the Allmysms service. | [optional] 
**all_my_sms_login** | **str** | The login credential for the Allmysms service. | 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_all_my_sms_put import TransportAllMySmsPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportAllMySmsPut from a JSON string
transport_all_my_sms_put_instance = TransportAllMySmsPut.from_json(json)
# print the JSON string representation of the object
print(TransportAllMySmsPut.to_json())

# convert the object into a dict
transport_all_my_sms_put_dict = transport_all_my_sms_put_instance.to_dict()
# create an instance of TransportAllMySmsPut from a dict
transport_all_my_sms_put_from_dict = TransportAllMySmsPut.from_dict(transport_all_my_sms_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


