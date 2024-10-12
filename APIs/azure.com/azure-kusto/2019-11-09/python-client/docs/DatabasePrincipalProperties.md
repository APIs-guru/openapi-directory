# DatabasePrincipalProperties

A class representing database principal property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal ID assigned to the database principal. It can be a user email, application ID, or security group name. | 
**principal_name** | **str** | The principal name | [optional] [readonly] 
**principal_type** | **str** | Principal type. | 
**provisioning_state** | **str** | The provisioned state of the resource. | [optional] [readonly] 
**role** | **str** | Database principal role. | 
**tenant_id** | **str** | The tenant id of the principal | [optional] 
**tenant_name** | **str** | The tenant name of the principal | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_principal_properties import DatabasePrincipalProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePrincipalProperties from a JSON string
database_principal_properties_instance = DatabasePrincipalProperties.from_json(json)
# print the JSON string representation of the object
print(DatabasePrincipalProperties.to_json())

# convert the object into a dict
database_principal_properties_dict = database_principal_properties_instance.to_dict()
# create an instance of DatabasePrincipalProperties from a dict
database_principal_properties_from_dict = DatabasePrincipalProperties.from_dict(database_principal_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


