# ScriptStatus

Generic object modeling results of script execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_instance_id** | **str** | ACI resource Id. | [optional] [readonly] 
**end_time** | **datetime** | End time of the script execution. | [optional] [readonly] 
**error** | [**DefaultErrorResponse**](DefaultErrorResponse.md) |  | [optional] 
**expiration_time** | **datetime** | Time the deployment script resource will expire. | [optional] [readonly] 
**start_time** | **datetime** | Start time of the script execution. | [optional] [readonly] 
**storage_account_id** | **str** | Storage account resource Id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.script_status import ScriptStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptStatus from a JSON string
script_status_instance = ScriptStatus.from_json(json)
# print the JSON string representation of the object
print(ScriptStatus.to_json())

# convert the object into a dict
script_status_dict = script_status_instance.to_dict()
# create an instance of ScriptStatus from a dict
script_status_from_dict = ScriptStatus.from_dict(script_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


