# RoboScriptExecution

Execution stats for a user-provided Robo script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successful_actions** | **int** | The number of Robo script actions executed successfully. | [optional] 
**total_actions** | **int** | The total number of actions in the Robo script. | [optional] 

## Example

```python
from openapi_client.models.robo_script_execution import RoboScriptExecution

# TODO update the JSON string below
json = "{}"
# create an instance of RoboScriptExecution from a JSON string
robo_script_execution_instance = RoboScriptExecution.from_json(json)
# print the JSON string representation of the object
print(RoboScriptExecution.to_json())

# convert the object into a dict
robo_script_execution_dict = robo_script_execution_instance.to_dict()
# create an instance of RoboScriptExecution from a dict
robo_script_execution_from_dict = RoboScriptExecution.from_dict(robo_script_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


