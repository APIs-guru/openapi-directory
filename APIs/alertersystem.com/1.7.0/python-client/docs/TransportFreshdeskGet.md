# TransportFreshdeskGet

The TransportFreshdesk resource is a collection of transports that carry dispatched alerts to the external Freshdesk service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**freshdesk_api_key** | **str** | The API key for the Freshdesk service. Stored in encrypted format. | 
**freshdesk_email** | **str** | The requester email address for the Freshdesk service. | 
**freshdesk_host** | **str** | The host name for the Freshdesk service (domain.freshdesk.com). | 
**freshdesk_priority** | **str** | The ticket priority for the Freshdesk service. | [optional] 
**freshdesk_type** | **str** | The ticket type for the Freshdesk service. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_freshdesk_get import TransportFreshdeskGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportFreshdeskGet from a JSON string
transport_freshdesk_get_instance = TransportFreshdeskGet.from_json(json)
# print the JSON string representation of the object
print(TransportFreshdeskGet.to_json())

# convert the object into a dict
transport_freshdesk_get_dict = transport_freshdesk_get_instance.to_dict()
# create an instance of TransportFreshdeskGet from a dict
transport_freshdesk_get_from_dict = TransportFreshdeskGet.from_dict(transport_freshdesk_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


