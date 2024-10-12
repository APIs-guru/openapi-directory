# InfraRoleModel

Infrastructure role properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name for the infrastructure role. | [optional] 
**instances** | **List[str]** | List of infrastructure role instances. | [optional] 
**restartable** | **bool** | Value indicating whether the infrastructure role can be restarted. | [optional] 

## Example

```python
from openapi_client.models.infra_role_model import InfraRoleModel

# TODO update the JSON string below
json = "{}"
# create an instance of InfraRoleModel from a JSON string
infra_role_model_instance = InfraRoleModel.from_json(json)
# print the JSON string representation of the object
print(InfraRoleModel.to_json())

# convert the object into a dict
infra_role_model_dict = infra_role_model_instance.to_dict()
# create an instance of InfraRoleModel from a dict
infra_role_model_from_dict = InfraRoleModel.from_dict(infra_role_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


