# GetCommandResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **str** |  | 
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | 
**duration** | **str** |  | 
**name** | **str** |  | 
**set** | **str** |  | 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_command_response import GetCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCommandResponse from a JSON string
get_command_response_instance = GetCommandResponse.from_json(json)
# print the JSON string representation of the object
print(GetCommandResponse.to_json())

# convert the object into a dict
get_command_response_dict = get_command_response_instance.to_dict()
# create an instance of GetCommandResponse from a dict
get_command_response_from_dict = GetCommandResponse.from_dict(get_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


