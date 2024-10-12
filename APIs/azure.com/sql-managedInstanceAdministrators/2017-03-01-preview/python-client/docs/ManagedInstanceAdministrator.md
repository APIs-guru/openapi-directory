# ManagedInstanceAdministrator

An Azure SQL managed instance administrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedInstanceAdministratorProperties**](ManagedInstanceAdministratorProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_administrator import ManagedInstanceAdministrator

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceAdministrator from a JSON string
managed_instance_administrator_instance = ManagedInstanceAdministrator.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceAdministrator.to_json())

# convert the object into a dict
managed_instance_administrator_dict = managed_instance_administrator_instance.to_dict()
# create an instance of ManagedInstanceAdministrator from a dict
managed_instance_administrator_from_dict = ManagedInstanceAdministrator.from_dict(managed_instance_administrator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


