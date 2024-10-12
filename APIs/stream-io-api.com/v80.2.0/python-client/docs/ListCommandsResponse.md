# ListCommandsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commands** | [**List[Command]**](Command.md) |  | 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.list_commands_response import ListCommandsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCommandsResponse from a JSON string
list_commands_response_instance = ListCommandsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCommandsResponse.to_json())

# convert the object into a dict
list_commands_response_dict = list_commands_response_instance.to_dict()
# create an instance of ListCommandsResponse from a dict
list_commands_response_from_dict = ListCommandsResponse.from_dict(list_commands_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


