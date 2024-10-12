# ScriptLog

Script execution log object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogProperties**](LogProperties.md) |  | [optional] 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.script_log import ScriptLog

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptLog from a JSON string
script_log_instance = ScriptLog.from_json(json)
# print the JSON string representation of the object
print(ScriptLog.to_json())

# convert the object into a dict
script_log_dict = script_log_instance.to_dict()
# create an instance of ScriptLog from a dict
script_log_from_dict = ScriptLog.from_dict(script_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


