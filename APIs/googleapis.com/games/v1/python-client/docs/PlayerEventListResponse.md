# PlayerEventListResponse

A ListByPlayer response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PlayerEvent]**](PlayerEvent.md) | The player events. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerEventListResponse&#x60;. | [optional] 
**next_page_token** | **str** | The pagination token for the next page of results. | [optional] 

## Example

```python
from openapi_client.models.player_event_list_response import PlayerEventListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerEventListResponse from a JSON string
player_event_list_response_instance = PlayerEventListResponse.from_json(json)
# print the JSON string representation of the object
print(PlayerEventListResponse.to_json())

# convert the object into a dict
player_event_list_response_dict = player_event_list_response_instance.to_dict()
# create an instance of PlayerEventListResponse from a dict
player_event_list_response_from_dict = PlayerEventListResponse.from_dict(player_event_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


