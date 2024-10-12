# TransportMastodonJsonldPost

The TransportMastodon resource is a collection of transports that carry dispatched alerts to the external Mastodon service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**mastodon_access_token** | **str** | The access token for the Mastodon service. Stored in encrypted format. | 
**mastodon_host** | **str** | The host name for the Mastodon service (omit the \&quot;https://\&quot; part). | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mastodon_jsonld_post import TransportMastodonJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMastodonJsonldPost from a JSON string
transport_mastodon_jsonld_post_instance = TransportMastodonJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportMastodonJsonldPost.to_json())

# convert the object into a dict
transport_mastodon_jsonld_post_dict = transport_mastodon_jsonld_post_instance.to_dict()
# create an instance of TransportMastodonJsonldPost from a dict
transport_mastodon_jsonld_post_from_dict = TransportMastodonJsonldPost.from_dict(transport_mastodon_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


