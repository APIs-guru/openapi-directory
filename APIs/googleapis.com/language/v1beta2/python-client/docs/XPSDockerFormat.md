# XPSDockerFormat

A model format used for Docker containers. Use the params field to customize the container. The container is verified to work correctly on ubuntu 16.04 operating system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_architecture** | **str** | Optional. Additional cpu information describing the requirements for the to be exported model files. | [optional] 
**gpu_architecture** | **str** | Optional. Additional gpu information describing the requirements for the to be exported model files. | [optional] 

## Example

```python
from openapi_client.models.xps_docker_format import XPSDockerFormat

# TODO update the JSON string below
json = "{}"
# create an instance of XPSDockerFormat from a JSON string
xps_docker_format_instance = XPSDockerFormat.from_json(json)
# print the JSON string representation of the object
print(XPSDockerFormat.to_json())

# convert the object into a dict
xps_docker_format_dict = xps_docker_format_instance.to_dict()
# create an instance of XPSDockerFormat from a dict
xps_docker_format_from_dict = XPSDockerFormat.from_dict(xps_docker_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


