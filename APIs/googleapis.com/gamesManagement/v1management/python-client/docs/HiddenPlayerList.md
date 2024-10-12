# HiddenPlayerList

A list of hidden players.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[HiddenPlayer]**](HiddenPlayer.md) | The players. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#hiddenPlayerList&#x60;. | [optional] 
**next_page_token** | **str** | The pagination token for the next page of results. | [optional] 

## Example

```python
from openapi_client.models.hidden_player_list import HiddenPlayerList

# TODO update the JSON string below
json = "{}"
# create an instance of HiddenPlayerList from a JSON string
hidden_player_list_instance = HiddenPlayerList.from_json(json)
# print the JSON string representation of the object
print(HiddenPlayerList.to_json())

# convert the object into a dict
hidden_player_list_dict = hidden_player_list_instance.to_dict()
# create an instance of HiddenPlayerList from a dict
hidden_player_list_from_dict = HiddenPlayerList.from_dict(hidden_player_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


