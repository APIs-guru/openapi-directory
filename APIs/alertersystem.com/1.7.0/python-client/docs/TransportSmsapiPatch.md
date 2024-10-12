# TransportSmsapiPatch

The TransportSmsapi resource is a collection of transports that carry dispatched alerts to the external SMS API service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**smsapi_from** | **str** | The sender name for the SMS API service. | 
**smsapi_token** | **str** | The API token for the SMS API service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_smsapi_patch import TransportSmsapiPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmsapiPatch from a JSON string
transport_smsapi_patch_instance = TransportSmsapiPatch.from_json(json)
# print the JSON string representation of the object
print(TransportSmsapiPatch.to_json())

# convert the object into a dict
transport_smsapi_patch_dict = transport_smsapi_patch_instance.to_dict()
# create an instance of TransportSmsapiPatch from a dict
transport_smsapi_patch_from_dict = TransportSmsapiPatch.from_dict(transport_smsapi_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


