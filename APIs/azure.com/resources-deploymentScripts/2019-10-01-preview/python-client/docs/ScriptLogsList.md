# ScriptLogsList

Deployment script execution logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ScriptLog]**](ScriptLog.md) | Deployment scripts logs. | [optional] 

## Example

```python
from openapi_client.models.script_logs_list import ScriptLogsList

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptLogsList from a JSON string
script_logs_list_instance = ScriptLogsList.from_json(json)
# print the JSON string representation of the object
print(ScriptLogsList.to_json())

# convert the object into a dict
script_logs_list_dict = script_logs_list_instance.to_dict()
# create an instance of ScriptLogsList from a dict
script_logs_list_from_dict = ScriptLogsList.from_dict(script_logs_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


