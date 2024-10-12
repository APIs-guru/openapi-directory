# ScriptOptions

Options related to script execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_result_statement** | **str** | Determines which statement in the script represents the \&quot;key result\&quot;, used to populate the schema and query results of the script job. Default is LAST. | [optional] 
**statement_byte_budget** | **str** | Limit on the number of bytes billed per statement. Exceeding this budget results in an error. | [optional] 
**statement_timeout_ms** | **str** | Timeout period for each statement in a script. | [optional] 

## Example

```python
from openapi_client.models.script_options import ScriptOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptOptions from a JSON string
script_options_instance = ScriptOptions.from_json(json)
# print the JSON string representation of the object
print(ScriptOptions.to_json())

# convert the object into a dict
script_options_dict = script_options_instance.to_dict()
# create an instance of ScriptOptions from a dict
script_options_from_dict = ScriptOptions.from_dict(script_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


