# TransportZendeskPost

The TransportZendesk resource is a collection of transports that carry dispatched alerts to the external Zendesk service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 
**zendesk_email** | **str** | The login email address for the Zendesk service. | 
**zendesk_host** | **str** | The host name for the Zendesk service (domain.zendesk.com). | 
**zendesk_token** | **str** | The token for the Zendesk service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_zendesk_post import TransportZendeskPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportZendeskPost from a JSON string
transport_zendesk_post_instance = TransportZendeskPost.from_json(json)
# print the JSON string representation of the object
print(TransportZendeskPost.to_json())

# convert the object into a dict
transport_zendesk_post_dict = transport_zendesk_post_instance.to_dict()
# create an instance of TransportZendeskPost from a dict
transport_zendesk_post_from_dict = TransportZendeskPost.from_dict(transport_zendesk_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


