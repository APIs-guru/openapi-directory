# InfraRoleInstance

The virtual machine resource is used to represent an infrastructure virtual machine in the Azure Stack environment. The fabric resource provider only surfaces infrastructure virtual machines. These machines are never created directly by the admin, but rather as a side effect of expanding admin services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InfraRoleInstanceModel**](InfraRoleInstanceModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.infra_role_instance import InfraRoleInstance

# TODO update the JSON string below
json = "{}"
# create an instance of InfraRoleInstance from a JSON string
infra_role_instance_instance = InfraRoleInstance.from_json(json)
# print the JSON string representation of the object
print(InfraRoleInstance.to_json())

# convert the object into a dict
infra_role_instance_dict = infra_role_instance_instance.to_dict()
# create an instance of InfraRoleInstance from a dict
infra_role_instance_from_dict = InfraRoleInstance.from_dict(infra_role_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


