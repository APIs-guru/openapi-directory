# InfraRoleInstanceList

Pageable list of infrastructure role instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[InfraRoleInstance]**](InfraRoleInstance.md) | List of infrastructure role instances. | [optional] 

## Example

```python
from openapi_client.models.infra_role_instance_list import InfraRoleInstanceList

# TODO update the JSON string below
json = "{}"
# create an instance of InfraRoleInstanceList from a JSON string
infra_role_instance_list_instance = InfraRoleInstanceList.from_json(json)
# print the JSON string representation of the object
print(InfraRoleInstanceList.to_json())

# convert the object into a dict
infra_role_instance_list_dict = infra_role_instance_list_instance.to_dict()
# create an instance of InfraRoleInstanceList from a dict
infra_role_instance_list_from_dict = InfraRoleInstanceList.from_dict(infra_role_instance_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


