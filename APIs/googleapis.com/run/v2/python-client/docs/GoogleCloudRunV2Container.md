# GoogleCloudRunV2Container

A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments can be supplied by the system to the container at runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Arguments to the entrypoint. The docker image&#39;s CMD is used if this is not provided. | [optional] 
**command** | **List[str]** | Entrypoint array. Not executed within a shell. The docker image&#39;s ENTRYPOINT is used if this is not provided. | [optional] 
**depends_on** | **List[str]** | Names of the containers that must start before this container. | [optional] 
**env** | [**List[GoogleCloudRunV2EnvVar]**](GoogleCloudRunV2EnvVar.md) | List of environment variables to set in the container. | [optional] 
**image** | **str** | Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. | [optional] 
**liveness_probe** | [**GoogleCloudRunV2Probe**](GoogleCloudRunV2Probe.md) |  | [optional] 
**name** | **str** | Name of the container specified as a DNS_LABEL (RFC 1123). | [optional] 
**ports** | [**List[GoogleCloudRunV2ContainerPort]**](GoogleCloudRunV2ContainerPort.md) | List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on. | [optional] 
**resources** | [**GoogleCloudRunV2ResourceRequirements**](GoogleCloudRunV2ResourceRequirements.md) |  | [optional] 
**startup_probe** | [**GoogleCloudRunV2Probe**](GoogleCloudRunV2Probe.md) |  | [optional] 
**volume_mounts** | [**List[GoogleCloudRunV2VolumeMount]**](GoogleCloudRunV2VolumeMount.md) | Volume to mount into the container&#39;s filesystem. | [optional] 
**working_dir** | **str** | Container&#39;s working directory. If not specified, the container runtime&#39;s default will be used, which might be configured in the container image. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_container import GoogleCloudRunV2Container

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2Container from a JSON string
google_cloud_run_v2_container_instance = GoogleCloudRunV2Container.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2Container.to_json())

# convert the object into a dict
google_cloud_run_v2_container_dict = google_cloud_run_v2_container_instance.to_dict()
# create an instance of GoogleCloudRunV2Container from a dict
google_cloud_run_v2_container_from_dict = GoogleCloudRunV2Container.from_dict(google_cloud_run_v2_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


