# TransportZendeskGet

The TransportZendesk resource is a collection of transports that carry dispatched alerts to the external Zendesk service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**zendesk_email** | **str** | The login email address for the Zendesk service. | 
**zendesk_host** | **str** | The host name for the Zendesk service (domain.zendesk.com). | 
**zendesk_token** | **str** | The token for the Zendesk service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_zendesk_get import TransportZendeskGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportZendeskGet from a JSON string
transport_zendesk_get_instance = TransportZendeskGet.from_json(json)
# print the JSON string representation of the object
print(TransportZendeskGet.to_json())

# convert the object into a dict
transport_zendesk_get_dict = transport_zendesk_get_instance.to_dict()
# create an instance of TransportZendeskGet from a dict
transport_zendesk_get_from_dict = TransportZendeskGet.from_dict(transport_zendesk_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


