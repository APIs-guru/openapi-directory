# TransportZendeskPatch

The TransportZendesk resource is a collection of transports that carry dispatched alerts to the external Zendesk service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**zendesk_email** | **str** | The login email address for the Zendesk service. | 
**zendesk_host** | **str** | The host name for the Zendesk service (domain.zendesk.com). | 
**zendesk_token** | **str** | The token for the Zendesk service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_zendesk_patch import TransportZendeskPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportZendeskPatch from a JSON string
transport_zendesk_patch_instance = TransportZendeskPatch.from_json(json)
# print the JSON string representation of the object
print(TransportZendeskPatch.to_json())

# convert the object into a dict
transport_zendesk_patch_dict = transport_zendesk_patch_instance.to_dict()
# create an instance of TransportZendeskPatch from a dict
transport_zendesk_patch_from_dict = TransportZendeskPatch.from_dict(transport_zendesk_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


