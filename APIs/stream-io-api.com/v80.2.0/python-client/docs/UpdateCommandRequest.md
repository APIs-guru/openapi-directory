# UpdateCommandRequest

Represents custom chat command

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**args** | **str** | Arguments help text, shown in commands auto-completion | [optional] 
**description** | **str** | Description, shown in commands auto-completion | 
**set** | **str** | Set name used for grouping commands | [optional] 

## Example

```python
from openapi_client.models.update_command_request import UpdateCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCommandRequest from a JSON string
update_command_request_instance = UpdateCommandRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCommandRequest.to_json())

# convert the object into a dict
update_command_request_dict = update_command_request_instance.to_dict()
# create an instance of UpdateCommandRequest from a dict
update_command_request_from_dict = UpdateCommandRequest.from_dict(update_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


