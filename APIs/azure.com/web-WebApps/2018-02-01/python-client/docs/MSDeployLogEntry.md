# MSDeployLogEntry

MSDeploy log entry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Log entry message | [optional] [readonly] 
**time** | **datetime** | Timestamp of log entry | [optional] [readonly] 
**type** | **str** | Log entry type | [optional] [readonly] 

## Example

```python
from openapi_client.models.ms_deploy_log_entry import MSDeployLogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of MSDeployLogEntry from a JSON string
ms_deploy_log_entry_instance = MSDeployLogEntry.from_json(json)
# print the JSON string representation of the object
print(MSDeployLogEntry.to_json())

# convert the object into a dict
ms_deploy_log_entry_dict = ms_deploy_log_entry_instance.to_dict()
# create an instance of MSDeployLogEntry from a dict
ms_deploy_log_entry_from_dict = MSDeployLogEntry.from_dict(ms_deploy_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


