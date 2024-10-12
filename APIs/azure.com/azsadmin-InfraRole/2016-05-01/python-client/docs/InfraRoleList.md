# InfraRoleList

Pageable list of infrastructure roles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[InfraRole]**](InfraRole.md) | List of infrastructure roles. | [optional] 

## Example

```python
from openapi_client.models.infra_role_list import InfraRoleList

# TODO update the JSON string below
json = "{}"
# create an instance of InfraRoleList from a JSON string
infra_role_list_instance = InfraRoleList.from_json(json)
# print the JSON string representation of the object
print(InfraRoleList.to_json())

# convert the object into a dict
infra_role_list_dict = infra_role_list_instance.to_dict()
# create an instance of InfraRoleList from a dict
infra_role_list_from_dict = InfraRoleList.from_dict(infra_role_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


