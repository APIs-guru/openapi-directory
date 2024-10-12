# ContainerResourceRequirements

The resource requirements for the container (cpu and memory).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **float** | The number of CPU cores on the container. | [optional] 
**fpga** | **int** | The number of FPGA PCIE devices exposed to the container. Must be multiple of 2. | [optional] 
**gpu** | **int** | The number of GPU cores in the container. | [optional] 
**memory_in_gb** | **float** | The amount of memory on the container in GB. | [optional] 

## Example

```python
from openapi_client.models.container_resource_requirements import ContainerResourceRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerResourceRequirements from a JSON string
container_resource_requirements_instance = ContainerResourceRequirements.from_json(json)
# print the JSON string representation of the object
print(ContainerResourceRequirements.to_json())

# convert the object into a dict
container_resource_requirements_dict = container_resource_requirements_instance.to_dict()
# create an instance of ContainerResourceRequirements from a dict
container_resource_requirements_from_dict = ContainerResourceRequirements.from_dict(container_resource_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


