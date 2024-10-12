# InfraRoleInstanceModel

All properties of an infrastructure role instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scale_unit** | **str** | The cluster that the virtual machine&#39;s host is part of. | [optional] 
**scale_unit_node** | **str** | URI to the scale unit node. | [optional] 
**size** | [**InfraRoleInstanceSize**](InfraRoleInstanceSize.md) |  | [optional] 
**state** | **str** | The current state of the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.infra_role_instance_model import InfraRoleInstanceModel

# TODO update the JSON string below
json = "{}"
# create an instance of InfraRoleInstanceModel from a JSON string
infra_role_instance_model_instance = InfraRoleInstanceModel.from_json(json)
# print the JSON string representation of the object
print(InfraRoleInstanceModel.to_json())

# convert the object into a dict
infra_role_instance_model_dict = infra_role_instance_model_instance.to_dict()
# create an instance of InfraRoleInstanceModel from a dict
infra_role_instance_model_from_dict = InfraRoleInstanceModel.from_dict(infra_role_instance_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


