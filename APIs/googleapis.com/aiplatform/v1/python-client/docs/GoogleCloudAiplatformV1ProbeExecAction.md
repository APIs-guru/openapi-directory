# GoogleCloudAiplatformV1ProbeExecAction

ExecAction specifies a command to execute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **List[str]** | Command is the command line to execute inside the container, the working directory for the command is root (&#39;/&#39;) in the container&#39;s filesystem. The command is simply exec&#39;d, it is not run inside a shell, so traditional shell instructions (&#39;|&#39;, etc) won&#39;t work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_probe_exec_action import GoogleCloudAiplatformV1ProbeExecAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ProbeExecAction from a JSON string
google_cloud_aiplatform_v1_probe_exec_action_instance = GoogleCloudAiplatformV1ProbeExecAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ProbeExecAction.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_probe_exec_action_dict = google_cloud_aiplatform_v1_probe_exec_action_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ProbeExecAction from a dict
google_cloud_aiplatform_v1_probe_exec_action_from_dict = GoogleCloudAiplatformV1ProbeExecAction.from_dict(google_cloud_aiplatform_v1_probe_exec_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


