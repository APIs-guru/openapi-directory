# TransportGotifyJsonldGet

The TransportGotify resource is a collection of transports that carry dispatched alerts to the external Gotify service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**gotify_api_url** | **str** | The API URL name for the Gotify service (https://example.com) - (do not include the path /message/createMessage). | 
**gotify_app_token** | **str** | The app token for the Gotify service. Stored in encrypted format. | 
**gotify_priority** | **str** | The priority for the Gotify service. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_gotify_jsonld_get import TransportGotifyJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportGotifyJsonldGet from a JSON string
transport_gotify_jsonld_get_instance = TransportGotifyJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportGotifyJsonldGet.to_json())

# convert the object into a dict
transport_gotify_jsonld_get_dict = transport_gotify_jsonld_get_instance.to_dict()
# create an instance of TransportGotifyJsonldGet from a dict
transport_gotify_jsonld_get_from_dict = TransportGotifyJsonldGet.from_dict(transport_gotify_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


