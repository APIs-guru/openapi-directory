# RoleOperationStatus

Backup status for a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_name** | **str** | Name of the role. | [optional] 
**status** | [**OperationStatus**](OperationStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.role_operation_status import RoleOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RoleOperationStatus from a JSON string
role_operation_status_instance = RoleOperationStatus.from_json(json)
# print the JSON string representation of the object
print(RoleOperationStatus.to_json())

# convert the object into a dict
role_operation_status_dict = role_operation_status_instance.to_dict()
# create an instance of RoleOperationStatus from a dict
role_operation_status_from_dict = RoleOperationStatus.from_dict(role_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


