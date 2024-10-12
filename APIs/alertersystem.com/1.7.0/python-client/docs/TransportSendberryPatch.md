# TransportSendberryPatch

The TransportSendberry resource is a collection of transports that carry dispatched alerts to the external Sendberry service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**sendberry_auth_key** | **str** | The auth key for the Sendberry service. | 
**sendberry_from** | **str** | The sender name or phone number for the Sendberry service. | 
**sendberry_password** | **str** | The password for the Sendberry service. Stored in encrypted format. | 
**sendberry_username** | **str** | The username for the Sendberry service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sendberry_patch import TransportSendberryPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSendberryPatch from a JSON string
transport_sendberry_patch_instance = TransportSendberryPatch.from_json(json)
# print the JSON string representation of the object
print(TransportSendberryPatch.to_json())

# convert the object into a dict
transport_sendberry_patch_dict = transport_sendberry_patch_instance.to_dict()
# create an instance of TransportSendberryPatch from a dict
transport_sendberry_patch_from_dict = TransportSendberryPatch.from_dict(transport_sendberry_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


