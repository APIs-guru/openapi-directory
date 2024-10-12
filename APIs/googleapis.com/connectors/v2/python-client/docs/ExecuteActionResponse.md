# ExecuteActionResponse

Response message for ActionService.ExecuteAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | **List[Dict[str, object]]** | In the case of successful invocation of the specified action, the results Struct contains values based on the response of the action invoked. 1. If the action execution produces any entities as a result, they are returned as an array of Structs with the &#39;key&#39; being the field name and the &#39;value&#39; being the value of that field in each result row. { &#39;results&#39;: [{&#39;key&#39;: &#39;value&#39;}, ...] } | [optional] 

## Example

```python
from openapi_client.models.execute_action_response import ExecuteActionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteActionResponse from a JSON string
execute_action_response_instance = ExecuteActionResponse.from_json(json)
# print the JSON string representation of the object
print(ExecuteActionResponse.to_json())

# convert the object into a dict
execute_action_response_dict = execute_action_response_instance.to_dict()
# create an instance of ExecuteActionResponse from a dict
execute_action_response_from_dict = ExecuteActionResponse.from_dict(execute_action_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


