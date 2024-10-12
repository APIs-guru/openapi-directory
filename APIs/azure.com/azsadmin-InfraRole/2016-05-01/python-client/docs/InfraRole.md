# InfraRole

Infrastructure role description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InfraRoleModel**](InfraRoleModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.infra_role import InfraRole

# TODO update the JSON string below
json = "{}"
# create an instance of InfraRole from a JSON string
infra_role_instance = InfraRole.from_json(json)
# print the JSON string representation of the object
print(InfraRole.to_json())

# convert the object into a dict
infra_role_dict = infra_role_instance.to_dict()
# create an instance of InfraRole from a dict
infra_role_from_dict = InfraRole.from_dict(infra_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


