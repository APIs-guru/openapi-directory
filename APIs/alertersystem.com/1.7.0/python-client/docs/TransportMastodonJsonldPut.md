# TransportMastodonJsonldPut

The TransportMastodon resource is a collection of transports that carry dispatched alerts to the external Mastodon service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**mastodon_access_token** | **str** | The access token for the Mastodon service. Stored in encrypted format. | 
**mastodon_host** | **str** | The host name for the Mastodon service (omit the \&quot;https://\&quot; part). | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mastodon_jsonld_put import TransportMastodonJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMastodonJsonldPut from a JSON string
transport_mastodon_jsonld_put_instance = TransportMastodonJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportMastodonJsonldPut.to_json())

# convert the object into a dict
transport_mastodon_jsonld_put_dict = transport_mastodon_jsonld_put_instance.to_dict()
# create an instance of TransportMastodonJsonldPut from a dict
transport_mastodon_jsonld_put_from_dict = TransportMastodonJsonldPut.from_dict(transport_mastodon_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


