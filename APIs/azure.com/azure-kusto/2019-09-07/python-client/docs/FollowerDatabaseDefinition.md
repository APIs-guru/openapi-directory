# FollowerDatabaseDefinition

A class representing follower database request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attached_database_configuration_name** | **str** | Resource name of the attached database configuration in the follower cluster. | 
**cluster_resource_id** | **str** | Resource id of the cluster that follows a database owned by this cluster. | 
**database_name** | **str** | The database name owned by this cluster that was followed. * in case following all databases. | [optional] [readonly] 

## Example

```python
from openapi_client.models.follower_database_definition import FollowerDatabaseDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of FollowerDatabaseDefinition from a JSON string
follower_database_definition_instance = FollowerDatabaseDefinition.from_json(json)
# print the JSON string representation of the object
print(FollowerDatabaseDefinition.to_json())

# convert the object into a dict
follower_database_definition_dict = follower_database_definition_instance.to_dict()
# create an instance of FollowerDatabaseDefinition from a dict
follower_database_definition_from_dict = FollowerDatabaseDefinition.from_dict(follower_database_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


