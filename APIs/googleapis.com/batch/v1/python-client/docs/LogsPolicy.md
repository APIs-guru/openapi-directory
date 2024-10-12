# LogsPolicy

LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_logging_option** | [**CloudLoggingOption**](CloudLoggingOption.md) |  | [optional] 
**destination** | **str** | Where logs should be saved. | [optional] 
**logs_path** | **str** | The path to which logs are saved when the destination &#x3D; PATH. This can be a local file path on the VM, or under the mount point of a Persistent Disk or Filestore, or a Cloud Storage path. | [optional] 

## Example

```python
from openapi_client.models.logs_policy import LogsPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of LogsPolicy from a JSON string
logs_policy_instance = LogsPolicy.from_json(json)
# print the JSON string representation of the object
print(LogsPolicy.to_json())

# convert the object into a dict
logs_policy_dict = logs_policy_instance.to_dict()
# create an instance of LogsPolicy from a dict
logs_policy_from_dict = LogsPolicy.from_dict(logs_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


