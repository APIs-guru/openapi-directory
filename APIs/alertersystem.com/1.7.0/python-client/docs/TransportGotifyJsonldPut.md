# TransportGotifyJsonldPut

The TransportGotify resource is a collection of transports that carry dispatched alerts to the external Gotify service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**gotify_api_url** | **str** | The API URL name for the Gotify service (https://example.com) - (do not include the path /message/createMessage). | 
**gotify_app_token** | **str** | The app token for the Gotify service. Stored in encrypted format. | 
**gotify_priority** | **str** | The priority for the Gotify service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_gotify_jsonld_put import TransportGotifyJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportGotifyJsonldPut from a JSON string
transport_gotify_jsonld_put_instance = TransportGotifyJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportGotifyJsonldPut.to_json())

# convert the object into a dict
transport_gotify_jsonld_put_dict = transport_gotify_jsonld_put_instance.to_dict()
# create an instance of TransportGotifyJsonldPut from a dict
transport_gotify_jsonld_put_from_dict = TransportGotifyJsonldPut.from_dict(transport_gotify_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


