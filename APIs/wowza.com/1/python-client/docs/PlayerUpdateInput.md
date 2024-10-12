# PlayerUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player** | [**Player3**](Player3.md) |  | 

## Example

```python
from openapi_client.models.player_update_input import PlayerUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerUpdateInput from a JSON string
player_update_input_instance = PlayerUpdateInput.from_json(json)
# print the JSON string representation of the object
print(PlayerUpdateInput.to_json())

# convert the object into a dict
player_update_input_dict = player_update_input_instance.to_dict()
# create an instance of PlayerUpdateInput from a dict
player_update_input_from_dict = PlayerUpdateInput.from_dict(player_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


