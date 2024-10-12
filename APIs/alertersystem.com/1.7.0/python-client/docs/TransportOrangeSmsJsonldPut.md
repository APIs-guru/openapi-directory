# TransportOrangeSmsJsonldPut

The TransportOrangeSms resource is a collection of transports that carry dispatched alerts to the external Orange SMS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**orange_sms_client_id** | **str** | The app client ID for the Orange SMS service. | 
**orange_sms_client_secret** | **str** | The app client secret for the Orange SMS service. Stored in encrypted format. | 
**orange_sms_from** | **str** | The sender phone number for the Orange SMS service. | 
**orange_sms_sender_name** | **str** | The sender name for the Orange SMS service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_orange_sms_jsonld_put import TransportOrangeSmsJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportOrangeSmsJsonldPut from a JSON string
transport_orange_sms_jsonld_put_instance = TransportOrangeSmsJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportOrangeSmsJsonldPut.to_json())

# convert the object into a dict
transport_orange_sms_jsonld_put_dict = transport_orange_sms_jsonld_put_instance.to_dict()
# create an instance of TransportOrangeSmsJsonldPut from a dict
transport_orange_sms_jsonld_put_from_dict = TransportOrangeSmsJsonldPut.from_dict(transport_orange_sms_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


