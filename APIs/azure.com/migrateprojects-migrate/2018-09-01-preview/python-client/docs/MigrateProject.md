# MigrateProject

Migrate Project REST Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | Gets or sets the eTag for concurrency control. | [optional] 
**id** | **str** | Gets the relative URL to get this migrate project. | [optional] [readonly] 
**location** | **str** | Gets or sets the Azure location in which migrate project is created. | [optional] 
**name** | **str** | Gets the name of the migrate project. | [optional] [readonly] 
**properties** | [**MigrateProjectProperties**](MigrateProjectProperties.md) |  | [optional] 
**tags** | [**MigrateProjectTags**](MigrateProjectTags.md) |  | [optional] 
**type** | **str** | Handled by resource provider. Type &#x3D; Microsoft.Migrate/MigrateProject. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migrate_project import MigrateProject

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateProject from a JSON string
migrate_project_instance = MigrateProject.from_json(json)
# print the JSON string representation of the object
print(MigrateProject.to_json())

# convert the object into a dict
migrate_project_dict = migrate_project_instance.to_dict()
# create an instance of MigrateProject from a dict
migrate_project_from_dict = MigrateProject.from_dict(migrate_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


