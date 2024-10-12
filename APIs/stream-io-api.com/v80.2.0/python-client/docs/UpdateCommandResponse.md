# UpdateCommandResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | [**Command**](Command.md) |  | [optional] 
**duration** | **str** |  | 

## Example

```python
from openapi_client.models.update_command_response import UpdateCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCommandResponse from a JSON string
update_command_response_instance = UpdateCommandResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCommandResponse.to_json())

# convert the object into a dict
update_command_response_dict = update_command_response_instance.to_dict()
# create an instance of UpdateCommandResponse from a dict
update_command_response_from_dict = UpdateCommandResponse.from_dict(update_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


