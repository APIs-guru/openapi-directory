# TransportTrelloJsonldPost

The TransportTrello resource is a collection of transports that carry dispatched alerts to the external Trello service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 
**trello_api_key** | **str** | The API key for the Trello service. | 
**trello_api_token** | **str** | The API token for the Trello service. Stored in encrypted format. | 
**trello_list_id** | **str** | The list ID for the Trello service. | 

## Example

```python
from openapi_client.models.transport_trello_jsonld_post import TransportTrelloJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTrelloJsonldPost from a JSON string
transport_trello_jsonld_post_instance = TransportTrelloJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportTrelloJsonldPost.to_json())

# convert the object into a dict
transport_trello_jsonld_post_dict = transport_trello_jsonld_post_instance.to_dict()
# create an instance of TransportTrelloJsonldPost from a dict
transport_trello_jsonld_post_from_dict = TransportTrelloJsonldPost.from_dict(transport_trello_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


