# Container

A Docker container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Optional. Arguments passed to the entrypoint. | [optional] 
**command** | **List[str]** | Optional. If set, overrides the default ENTRYPOINT specified by the image. | [optional] 
**env** | **Dict[str, str]** | Optional. Environment variables passed to the container&#39;s entrypoint. | [optional] 
**image** | **str** | Optional. A Docker container image that defines a custom environment. Cloud Workstations provides a number of [preconfigured images](https://cloud.google.com/workstations/docs/preconfigured-base-images), but you can create your own [custom container images](https://cloud.google.com/workstations/docs/custom-container-images). If using a private image, the &#x60;host.gceInstance.serviceAccount&#x60; field must be specified in the workstation configuration. If using a custom container image, the service account must have [Artifact Registry Reader](https://cloud.google.com/artifact-registry/docs/access-control#roles) permission to pull the specified image. Otherwise, the image must be publicly accessible. | [optional] 
**run_as_user** | **int** | Optional. If set, overrides the USER specified in the image with the given uid. | [optional] 
**working_dir** | **str** | Optional. If set, overrides the default DIR specified by the image. | [optional] 

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


