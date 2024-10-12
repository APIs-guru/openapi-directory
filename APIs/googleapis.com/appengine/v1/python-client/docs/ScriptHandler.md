# ScriptHandler

Executes a script to handle the request that matches the URL pattern.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script_path** | **str** | Path to the script from the application root directory. | [optional] 

## Example

```python
from openapi_client.models.script_handler import ScriptHandler

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptHandler from a JSON string
script_handler_instance = ScriptHandler.from_json(json)
# print the JSON string representation of the object
print(ScriptHandler.to_json())

# convert the object into a dict
script_handler_dict = script_handler_instance.to_dict()
# create an instance of ScriptHandler from a dict
script_handler_from_dict = ScriptHandler.from_dict(script_handler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


