# ExecuteActionRequest

Request message for ActionService.ExecuteAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, object]** | Parameters for executing the action. The parameters can be key/value pairs or nested structs. | [optional] 

## Example

```python
from openapi_client.models.execute_action_request import ExecuteActionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteActionRequest from a JSON string
execute_action_request_instance = ExecuteActionRequest.from_json(json)
# print the JSON string representation of the object
print(ExecuteActionRequest.to_json())

# convert the object into a dict
execute_action_request_dict = execute_action_request_instance.to_dict()
# create an instance of ExecuteActionRequest from a dict
execute_action_request_from_dict = ExecuteActionRequest.from_dict(execute_action_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


