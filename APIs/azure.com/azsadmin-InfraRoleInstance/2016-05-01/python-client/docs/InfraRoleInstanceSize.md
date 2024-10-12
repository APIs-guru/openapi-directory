# InfraRoleInstanceSize

The capacity information for a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cores** | **int** | The number of cores assigned to the virtual machine. | [optional] 
**memory_gb** | **float** | The amount of memory, in GB, currently assigned to the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.infra_role_instance_size import InfraRoleInstanceSize

# TODO update the JSON string below
json = "{}"
# create an instance of InfraRoleInstanceSize from a JSON string
infra_role_instance_size_instance = InfraRoleInstanceSize.from_json(json)
# print the JSON string representation of the object
print(InfraRoleInstanceSize.to_json())

# convert the object into a dict
infra_role_instance_size_dict = infra_role_instance_size_instance.to_dict()
# create an instance of InfraRoleInstanceSize from a dict
infra_role_instance_size_from_dict = InfraRoleInstanceSize.from_dict(infra_role_instance_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


