# MembersCustomBoardBackgrounds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brightness** | **str** | One of: dark, light or unknown | [optional] 
**file** | **str** | A file | [optional] 
**tile** | **str** |  true or false | [optional] 

## Example

```python
from openapi_client.models.members_custom_board_backgrounds import MembersCustomBoardBackgrounds

# TODO update the JSON string below
json = "{}"
# create an instance of MembersCustomBoardBackgrounds from a JSON string
members_custom_board_backgrounds_instance = MembersCustomBoardBackgrounds.from_json(json)
# print the JSON string representation of the object
print(MembersCustomBoardBackgrounds.to_json())

# convert the object into a dict
members_custom_board_backgrounds_dict = members_custom_board_backgrounds_instance.to_dict()
# create an instance of MembersCustomBoardBackgrounds from a dict
members_custom_board_backgrounds_from_dict = MembersCustomBoardBackgrounds.from_dict(members_custom_board_backgrounds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


