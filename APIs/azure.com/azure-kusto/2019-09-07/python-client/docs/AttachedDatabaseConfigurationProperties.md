# AttachedDatabaseConfigurationProperties

Class representing the an attached database configuration properties of kind specific.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attached_database_names** | **List[str]** | The list of databases from the clusterResourceId which are currently attached to the cluster. | [optional] [readonly] 
**cluster_resource_id** | **str** | The resource id of the cluster where the databases you would like to attach reside. | 
**database_name** | **str** | The name of the database which you would like to attach, use * if you want to follow all current and future databases. | 
**default_principals_modification_kind** | **str** | The default principals modification kind | 
**provisioning_state** | **str** | The provisioned state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attached_database_configuration_properties import AttachedDatabaseConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AttachedDatabaseConfigurationProperties from a JSON string
attached_database_configuration_properties_instance = AttachedDatabaseConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(AttachedDatabaseConfigurationProperties.to_json())

# convert the object into a dict
attached_database_configuration_properties_dict = attached_database_configuration_properties_instance.to_dict()
# create an instance of AttachedDatabaseConfigurationProperties from a dict
attached_database_configuration_properties_from_dict = AttachedDatabaseConfigurationProperties.from_dict(attached_database_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


