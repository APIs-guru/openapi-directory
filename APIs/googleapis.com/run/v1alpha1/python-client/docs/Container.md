# Container

A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | (Optional) Arguments to the entrypoint. The docker image&#39;s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container&#39;s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell | [optional] 
**command** | **List[str]** |  | [optional] 
**env** | [**List[EnvVar]**](EnvVar.md) | (Optional) List of environment variables to set in the container. | [optional] 
**env_from** | [**List[EnvFromSource]**](EnvFromSource.md) | (Optional) List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. | [optional] 
**image** | **str** | Only supports containers from Google Container Registry or Artifact Registry URL of the Container image. More info: https://kubernetes.io/docs/concepts/containers/images | [optional] 
**image_pull_policy** | **str** | (Optional) Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images | [optional] 
**liveness_probe** | [**Probe**](Probe.md) |  | [optional] 
**name** | **str** | (Optional) Name of the container specified as a DNS_LABEL. Currently unused in Cloud Run. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names | [optional] 
**ports** | [**List[ContainerPort]**](ContainerPort.md) | (Optional) List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on. | [optional] 
**readiness_probe** | [**Probe**](Probe.md) |  | [optional] 
**resources** | [**ResourceRequirements**](ResourceRequirements.md) |  | [optional] 
**security_context** | [**SecurityContext**](SecurityContext.md) |  | [optional] 
**startup_probe** | [**Probe**](Probe.md) |  | [optional] 
**termination_message_path** | **str** | (Optional) Path at which the file to which the container&#39;s termination message will be written is mounted into the container&#39;s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. | [optional] 
**termination_message_policy** | **str** | (Optional) Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. | [optional] 
**volume_mounts** | [**List[VolumeMount]**](VolumeMount.md) | (Optional) Volume to mount into the container&#39;s filesystem. Only supports SecretVolumeSources. Pod volumes to mount into the container&#39;s filesystem. | [optional] 
**working_dir** | **str** | (Optional) Container&#39;s working directory. If not specified, the container runtime&#39;s default will be used, which might be configured in the container image. | [optional] 

## Example

```python
from openapi_client.models.container import Container

# TODO update the JSON string below
json = "{}"
# create an instance of Container from a JSON string
container_instance = Container.from_json(json)
# print the JSON string representation of the object
print(Container.to_json())

# convert the object into a dict
container_dict = container_instance.to_dict()
# create an instance of Container from a dict
container_from_dict = Container.from_dict(container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


