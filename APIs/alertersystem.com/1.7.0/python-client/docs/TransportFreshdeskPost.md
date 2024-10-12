# TransportFreshdeskPost

The TransportFreshdesk resource is a collection of transports that carry dispatched alerts to the external Freshdesk service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**freshdesk_api_key** | **str** | The API key for the Freshdesk service. Stored in encrypted format. | 
**freshdesk_email** | **str** | The requester email address for the Freshdesk service. | 
**freshdesk_host** | **str** | The host name for the Freshdesk service (domain.freshdesk.com). | 
**freshdesk_priority** | **str** | The ticket priority for the Freshdesk service. | [optional] 
**freshdesk_type** | **str** | The ticket type for the Freshdesk service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_freshdesk_post import TransportFreshdeskPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportFreshdeskPost from a JSON string
transport_freshdesk_post_instance = TransportFreshdeskPost.from_json(json)
# print the JSON string representation of the object
print(TransportFreshdeskPost.to_json())

# convert the object into a dict
transport_freshdesk_post_dict = transport_freshdesk_post_instance.to_dict()
# create an instance of TransportFreshdeskPost from a dict
transport_freshdesk_post_from_dict = TransportFreshdeskPost.from_dict(transport_freshdesk_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


