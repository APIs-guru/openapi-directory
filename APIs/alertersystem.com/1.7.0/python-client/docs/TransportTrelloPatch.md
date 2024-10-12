# TransportTrelloPatch

The TransportTrello resource is a collection of transports that carry dispatched alerts to the external Trello service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**trello_api_key** | **str** | The API key for the Trello service. | 
**trello_api_token** | **str** | The API token for the Trello service. Stored in encrypted format. | 
**trello_list_id** | **str** | The list ID for the Trello service. | 

## Example

```python
from openapi_client.models.transport_trello_patch import TransportTrelloPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTrelloPatch from a JSON string
transport_trello_patch_instance = TransportTrelloPatch.from_json(json)
# print the JSON string representation of the object
print(TransportTrelloPatch.to_json())

# convert the object into a dict
transport_trello_patch_dict = transport_trello_patch_instance.to_dict()
# create an instance of TransportTrelloPatch from a dict
transport_trello_patch_from_dict = TransportTrelloPatch.from_dict(transport_trello_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


