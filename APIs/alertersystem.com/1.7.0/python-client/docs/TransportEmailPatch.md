# TransportEmailPatch

The TransportEmail resource is a collection of transports that carry dispatched alerts to external SMTP email services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**email_from_address** | **str** | The sender email address for the SMTP Email service. | 
**email_from_name** | **str** | The sender name for the SMTP Email service. | 
**email_password** | **str** | The password for the SMTP Email service. Stored in encrypted format. | 
**email_port** | **int** | The port for the SMTP Email service. | 
**email_server** | **str** | The server for the SMTP Email service. | 
**email_username** | **str** | The username for the SMTP Email service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_email_patch import TransportEmailPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportEmailPatch from a JSON string
transport_email_patch_instance = TransportEmailPatch.from_json(json)
# print the JSON string representation of the object
print(TransportEmailPatch.to_json())

# convert the object into a dict
transport_email_patch_dict = transport_email_patch_instance.to_dict()
# create an instance of TransportEmailPatch from a dict
transport_email_patch_from_dict = TransportEmailPatch.from_dict(transport_email_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


