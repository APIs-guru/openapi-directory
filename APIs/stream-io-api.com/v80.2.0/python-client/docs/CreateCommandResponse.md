# CreateCommandResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | [**Command**](Command.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.create_command_response import CreateCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCommandResponse from a JSON string
create_command_response_instance = CreateCommandResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCommandResponse.to_json())

# convert the object into a dict
create_command_response_dict = create_command_response_instance.to_dict()
# create an instance of CreateCommandResponse from a dict
create_command_response_from_dict = CreateCommandResponse.from_dict(create_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


