# GetGameHighScoresPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **int** | Required if *inline\\_message\\_id* is not specified. Unique identifier for the target chat | [optional] 
**inline_message_id** | **str** | Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message | [optional] 
**message_id** | **int** | Required if *inline\\_message\\_id* is not specified. Identifier of the sent message | [optional] 
**user_id** | **int** | Target user id | 

## Example

```python
from openapi_client.models.get_game_high_scores_post_request import GetGameHighScoresPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetGameHighScoresPostRequest from a JSON string
get_game_high_scores_post_request_instance = GetGameHighScoresPostRequest.from_json(json)
# print the JSON string representation of the object
print(GetGameHighScoresPostRequest.to_json())

# convert the object into a dict
get_game_high_scores_post_request_dict = get_game_high_scores_post_request_instance.to_dict()
# create an instance of GetGameHighScoresPostRequest from a dict
get_game_high_scores_post_request_from_dict = GetGameHighScoresPostRequest.from_dict(get_game_high_scores_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


