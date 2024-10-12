# MembersBoardStars


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_board** | **str** | The id of the board to star | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 

## Example

```python
from openapi_client.models.members_board_stars import MembersBoardStars

# TODO update the JSON string below
json = "{}"
# create an instance of MembersBoardStars from a JSON string
members_board_stars_instance = MembersBoardStars.from_json(json)
# print the JSON string representation of the object
print(MembersBoardStars.to_json())

# convert the object into a dict
members_board_stars_dict = members_board_stars_instance.to_dict()
# create an instance of MembersBoardStars from a dict
members_board_stars_from_dict = MembersBoardStars.from_dict(members_board_stars_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


