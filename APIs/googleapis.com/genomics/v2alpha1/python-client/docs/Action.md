# Action

Specifies a single action that runs a Docker container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commands** | **List[str]** | If specified, overrides the &#x60;CMD&#x60; specified in the container. If the container also has an &#x60;ENTRYPOINT&#x60; the values are used as entrypoint arguments. Otherwise, they are used as a command and arguments to run inside the container. | [optional] 
**credentials** | [**Secret**](Secret.md) |  | [optional] 
**encrypted_environment** | [**Secret**](Secret.md) |  | [optional] 
**entrypoint** | **str** | If specified, overrides the &#x60;ENTRYPOINT&#x60; specified in the container. | [optional] 
**environment** | **Dict[str, str]** | The environment to pass into the container. This environment is merged with values specified in the google.genomics.v2alpha1.Pipeline message, overwriting any duplicate values. In addition to the values passed here, a few other values are automatically injected into the environment. These cannot be hidden or overwritten. &#x60;GOOGLE_PIPELINE_FAILED&#x60; will be set to \&quot;1\&quot; if the pipeline failed because an action has exited with a non-zero status (and did not have the &#x60;IGNORE_EXIT_STATUS&#x60; flag set). This can be used to determine if additional debug or logging actions should execute. &#x60;GOOGLE_LAST_EXIT_STATUS&#x60; will be set to the exit status of the last non-background action that executed. This can be used by workflow engine authors to determine whether an individual action has succeeded or failed. | [optional] 
**flags** | **List[str]** | The set of flags to apply to this action. | [optional] 
**image_uri** | **str** | Required. The URI to pull the container image from. Note that all images referenced by actions in the pipeline are pulled before the first action runs. If multiple actions reference the same image, it is only pulled once, ensuring that the same image is used for all actions in a single pipeline. The image URI can be either a complete host and image specification (e.g., quay.io/biocontainers/samtools), a library and image name (e.g., google/cloud-sdk) or a bare image name (&#39;bash&#39;) to pull from the default library. No schema is required in any of these cases. If the specified image is not public, the service account specified for the Virtual Machine must have access to pull the images from GCR, or appropriate credentials must be specified in the google.genomics.v2alpha1.Action.credentials field. | [optional] 
**labels** | **Dict[str, str]** | Labels to associate with the action. This field is provided to assist workflow engine authors in identifying actions (for example, to indicate what sort of action they perform, such as localization or debugging). They are returned in the operation metadata, but are otherwise ignored. | [optional] 
**mounts** | [**List[Mount]**](Mount.md) | A list of mounts to make available to the action. In addition to the values specified here, every action has a special virtual disk mounted under &#x60;/google&#x60; that contains log files and other operational components. - /google/logs All logs written during the pipeline execution. - /google/logs/output The combined standard output and standard error of all actions run as part of the pipeline execution. - /google/logs/action/*/stdout The complete contents of each individual action&#39;s standard output. - /google/logs/action/*/stderr The complete contents of each individual action&#39;s standard error output.  | [optional] 
**name** | **str** | An optional name for the container. The container hostname will be set to this name, making it useful for inter-container communication. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen. | [optional] 
**pid_namespace** | **str** | An optional identifier for a PID namespace to run the action inside. Multiple actions should use the same string to share a namespace. If unspecified, a separate isolated namespace is used. | [optional] 
**port_mappings** | **Dict[str, int]** | A map of containers to host port mappings for this container. If the container already specifies exposed ports, use the &#x60;PUBLISH_EXPOSED_PORTS&#x60; flag instead. The host port number must be less than 65536. If it is zero, an unused random port is assigned. To determine the resulting port number, consult the &#x60;ContainerStartedEvent&#x60; in the operation metadata. | [optional] 
**timeout** | **str** | The maximum amount of time to give the action to complete. If the action fails to complete before the timeout, it will be terminated and the exit status will be non-zero. The pipeline will continue or terminate based on the rules defined by the &#x60;ALWAYS_RUN&#x60; and &#x60;IGNORE_EXIT_STATUS&#x60; flags. | [optional] 

## Example

```python
from openapi_client.models.action import Action

# TODO update the JSON string below
json = "{}"
# create an instance of Action from a JSON string
action_instance = Action.from_json(json)
# print the JSON string representation of the object
print(Action.to_json())

# convert the object into a dict
action_dict = action_instance.to_dict()
# create an instance of Action from a dict
action_from_dict = Action.from_dict(action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


