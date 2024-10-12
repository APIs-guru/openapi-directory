# SetMyCommandsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commands** | [**List[BotCommand]**](BotCommand.md) | A JSON-serialized list of bot commands to be set as the list of the bot&#39;s commands. At most 100 commands can be specified. | 

## Example

```python
from openapi_client.models.set_my_commands_post_request import SetMyCommandsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetMyCommandsPostRequest from a JSON string
set_my_commands_post_request_instance = SetMyCommandsPostRequest.from_json(json)
# print the JSON string representation of the object
print(SetMyCommandsPostRequest.to_json())

# convert the object into a dict
set_my_commands_post_request_dict = set_my_commands_post_request_instance.to_dict()
# create an instance of SetMyCommandsPostRequest from a dict
set_my_commands_post_request_from_dict = SetMyCommandsPostRequest.from_dict(set_my_commands_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


