# TransportGotifyPost

The TransportGotify resource is a collection of transports that carry dispatched alerts to the external Gotify service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**gotify_api_url** | **str** | The API URL name for the Gotify service (https://example.com) - (do not include the path /message/createMessage). | 
**gotify_app_token** | **str** | The app token for the Gotify service. Stored in encrypted format. | 
**gotify_priority** | **str** | The priority for the Gotify service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_gotify_post import TransportGotifyPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportGotifyPost from a JSON string
transport_gotify_post_instance = TransportGotifyPost.from_json(json)
# print the JSON string representation of the object
print(TransportGotifyPost.to_json())

# convert the object into a dict
transport_gotify_post_dict = transport_gotify_post_instance.to_dict()
# create an instance of TransportGotifyPost from a dict
transport_gotify_post_from_dict = TransportGotifyPost.from_dict(transport_gotify_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


