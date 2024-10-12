# DeleteCommandResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.delete_command_response import DeleteCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteCommandResponse from a JSON string
delete_command_response_instance = DeleteCommandResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteCommandResponse.to_json())

# convert the object into a dict
delete_command_response_dict = delete_command_response_instance.to_dict()
# create an instance of DeleteCommandResponse from a dict
delete_command_response_from_dict = DeleteCommandResponse.from_dict(delete_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


