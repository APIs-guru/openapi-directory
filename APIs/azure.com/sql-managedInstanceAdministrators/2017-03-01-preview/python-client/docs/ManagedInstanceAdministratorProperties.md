# ManagedInstanceAdministratorProperties

The properties of a managed instance administrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_type** | **str** | Type of the managed instance administrator. | 
**login** | **str** | Login name of the managed instance administrator. | 
**sid** | **str** | SID (object ID) of the managed instance administrator. | 
**tenant_id** | **str** | Tenant ID of the managed instance administrator. | [optional] 

## Example

```python
from openapi_client.models.managed_instance_administrator_properties import ManagedInstanceAdministratorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceAdministratorProperties from a JSON string
managed_instance_administrator_properties_instance = ManagedInstanceAdministratorProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceAdministratorProperties.to_json())

# convert the object into a dict
managed_instance_administrator_properties_dict = managed_instance_administrator_properties_instance.to_dict()
# create an instance of ManagedInstanceAdministratorProperties from a dict
managed_instance_administrator_properties_from_dict = ManagedInstanceAdministratorProperties.from_dict(managed_instance_administrator_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


