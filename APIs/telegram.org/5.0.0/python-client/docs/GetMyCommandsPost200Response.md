# GetMyCommandsPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**List[BotCommand]**](BotCommand.md) |  | 

## Example

```python
from openapi_client.models.get_my_commands_post200_response import GetMyCommandsPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMyCommandsPost200Response from a JSON string
get_my_commands_post200_response_instance = GetMyCommandsPost200Response.from_json(json)
# print the JSON string representation of the object
print(GetMyCommandsPost200Response.to_json())

# convert the object into a dict
get_my_commands_post200_response_dict = get_my_commands_post200_response_instance.to_dict()
# create an instance of GetMyCommandsPost200Response from a dict
get_my_commands_post200_response_from_dict = GetMyCommandsPost200Response.from_dict(get_my_commands_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


