# RoleMapping

The mapping between a user/principal and their role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** |  | 
**principal_name** | **str** | A friendly name for the principal. | [optional] 
**role** | [**RoleType**](RoleType.md) |  | 

## Example

```python
from openapi_client.models.role_mapping import RoleMapping

# TODO update the JSON string below
json = "{}"
# create an instance of RoleMapping from a JSON string
role_mapping_instance = RoleMapping.from_json(json)
# print the JSON string representation of the object
print(RoleMapping.to_json())

# convert the object into a dict
role_mapping_dict = role_mapping_instance.to_dict()
# create an instance of RoleMapping from a dict
role_mapping_from_dict = RoleMapping.from_dict(role_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


