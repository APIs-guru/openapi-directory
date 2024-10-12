# Boards


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed** | **str** |  true or false | [optional] 
**desc** | **str** | a string with a length from 0 to 16384 | [optional] 
**id_board_source** | **str** | The id of the board to copy into the new board | [optional] 
**id_organization** | **str** | The id or name of the organization to add the board to. | [optional] 
**keep_from_source** | **str** | Components of the source board to copy. | [optional] 
**label_names_blue** | **str** | a string with a length from 0 to 16384 | [optional] 
**label_names_green** | **str** | a string with a length from 0 to 16384 | [optional] 
**label_names_orange** | **str** | a string with a length from 0 to 16384 | [optional] 
**label_names_purple** | **str** | a string with a length from 0 to 16384 | [optional] 
**label_names_red** | **str** | a string with a length from 0 to 16384 | [optional] 
**label_names_yellow** | **str** | a string with a length from 0 to 16384 | [optional] 
**name** | **str** | a string with a length from 1 to 16384 | [optional] 
**power_ups** | **str** | all or a comma-separated list of: calendar, cardAging, recap or voting | [optional] 
**prefs_background** | **str** | A standard background name, or the id of a custom background | [optional] 
**prefs_calendar_feed_enabled** | **str** |  true or false | [optional] 
**prefs_card_aging** | **str** | One of: pirate or regular | [optional] 
**prefs_card_covers** | **str** |  true or false | [optional] 
**prefs_comments** | **str** | One of: disabled, members, observers, org or public | [optional] 
**prefs_invitations** | **str** | One of: admins or members | [optional] 
**prefs_permission_level** | **str** | One of: org, private or public | [optional] 
**prefs_self_join** | **str** |  true or false | [optional] 
**prefs_voting** | **str** | One of: disabled, members, observers, org or public | [optional] 
**prefs_background** | **str** | a string with a length from 0 to 16384 | [optional] 
**prefs_card_aging** | **str** | One of: pirate or regular | [optional] 
**prefs_card_covers** | **str** |  true or false | [optional] 
**prefs_comments** | **str** | One of: disabled, members, observers, org or public | [optional] 
**prefs_invitations** | **str** | One of: admins or members | [optional] 
**prefs_permission_level** | **str** | One of: org, private or public | [optional] 
**prefs_self_join** | **str** |  true or false | [optional] 
**prefs_voting** | **str** | One of: disabled, members, observers, org or public | [optional] 
**subscribed** | **str** |  true or false | [optional] 

## Example

```python
from openapi_client.models.boards import Boards

# TODO update the JSON string below
json = "{}"
# create an instance of Boards from a JSON string
boards_instance = Boards.from_json(json)
# print the JSON string representation of the object
print(Boards.to_json())

# convert the object into a dict
boards_dict = boards_instance.to_dict()
# create an instance of Boards from a dict
boards_from_dict = Boards.from_dict(boards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


