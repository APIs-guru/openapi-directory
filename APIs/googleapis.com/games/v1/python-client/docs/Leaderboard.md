# Leaderboard

The Leaderboard resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon_url** | **str** | The icon for the leaderboard. | [optional] 
**id** | **str** | The leaderboard ID. | [optional] 
**is_icon_url_default** | **bool** | Indicates whether the icon image being returned is a default image, or is game-provided. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#leaderboard&#x60;. | [optional] 
**name** | **str** | The name of the leaderboard. | [optional] 
**order** | **str** | How scores are ordered. | [optional] 

## Example

```python
from openapi_client.models.leaderboard import Leaderboard

# TODO update the JSON string below
json = "{}"
# create an instance of Leaderboard from a JSON string
leaderboard_instance = Leaderboard.from_json(json)
# print the JSON string representation of the object
print(Leaderboard.to_json())

# convert the object into a dict
leaderboard_dict = leaderboard_instance.to_dict()
# create an instance of Leaderboard from a dict
leaderboard_from_dict = Leaderboard.from_dict(leaderboard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


