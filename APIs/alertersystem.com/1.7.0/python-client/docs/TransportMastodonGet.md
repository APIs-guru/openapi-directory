# TransportMastodonGet

The TransportMastodon resource is a collection of transports that carry dispatched alerts to the external Mastodon service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**mastodon_access_token** | **str** | The access token for the Mastodon service. Stored in encrypted format. | 
**mastodon_host** | **str** | The host name for the Mastodon service (omit the \&quot;https://\&quot; part). | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mastodon_get import TransportMastodonGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMastodonGet from a JSON string
transport_mastodon_get_instance = TransportMastodonGet.from_json(json)
# print the JSON string representation of the object
print(TransportMastodonGet.to_json())

# convert the object into a dict
transport_mastodon_get_dict = transport_mastodon_get_instance.to_dict()
# create an instance of TransportMastodonGet from a dict
transport_mastodon_get_from_dict = TransportMastodonGet.from_dict(transport_mastodon_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


